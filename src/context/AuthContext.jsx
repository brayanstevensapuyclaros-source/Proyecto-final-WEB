import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../Supabase/config';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [role, setRole]       = useState(null);
  const [nombre, setNombre]   = useState('');
  const [loading, setLoading] = useState(true);

  const fetchRole = async (userId) => {
    const { data } = await supabase
      .from('profiles')
      .select('role, nombre')
      .eq('id', userId)
      .single();
    setRole(data?.role ?? 'user');
    setNombre(data?.nombre ?? '');
    setLoading(false);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchRole(session.user.id);
      else setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchRole(session.user.id);
      else { setRole(null); setNombre(''); setLoading(false); }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = () => supabase.auth.signOut();

  return (
    <AuthContext.Provider value={{ user, role, nombre, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);