import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";

type Role = "cliente" | "regulador";

export default function ProtectedRoute({
  role,
  children,
}: {
  role: Role;
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const run = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const user = sessionData.session?.user;

      if (!user) {
        setAllowed(false);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (error || !data?.role) {
        setAllowed(false);
      } else {
        setAllowed(data.role === role);
      }

      setLoading(false);
    };

    run();
  }, [role]);

  if (loading) return null;

  if (!allowed) {
    return <Navigate to={role === "cliente" ? "/login/cliente" : "/login/regulador"} replace />;
  }

  return <>{children}</>;
}
