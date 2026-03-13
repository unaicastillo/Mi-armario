import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import Header from './Header';
import HeaderSesion from './HeaderSesion';
import { supabase } from '../supabase/client';

const HeaderBySession = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return session ? <HeaderSesion /> : <Header />;
};

export default HeaderBySession;