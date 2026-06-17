"use client";

import { createContext, useContext, ReactNode } from "react";

// Server-authoritative entitlement, delivered from the (app) layout (which
// reads the Supabase session and public.users.is_pro) down to every client
// component. The browser cannot change these values — it only mirrors what
// the server sent.
interface AccessState {
  pro: boolean;
  signedIn: boolean;
}

const AccessCtx = createContext<AccessState>({ pro: false, signedIn: false });

export function AccessProvider({ pro, signedIn = false, children }: { pro: boolean; signedIn?: boolean; children: ReactNode }) {
  return <AccessCtx.Provider value={{ pro, signedIn }}>{children}</AccessCtx.Provider>;
}

export function useServerPro(): boolean {
  return useContext(AccessCtx).pro;
}

// Whether the visitor has an account (vs. playing as a guest).
export function useSignedIn(): boolean {
  return useContext(AccessCtx).signedIn;
}
