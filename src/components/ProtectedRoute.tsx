import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
  allowedRole: "cliente" | "regulador";
};

export function ProtectedRoute({ children, allowedRole }: Props) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;

      if (!session) {
        setAuthorized(false);
        setLoading(false);
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single();

      setAuthorized(profile?.role === allowedRole);
      setLoading(false);
    };

    checkAccess();
  }, [allowedRole]);

  if (loading) return null;

  if (!authorized) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
