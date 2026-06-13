"use client";

import { createContext, useContext, ReactNode } from "react";

// Server-authoritative Pro entitlement, delivered from the (app) layout
// (which reads public.users.is_pro) down to every client component. The
// browser cannot change this value — it only mirrors what the server sent.
const ProContext = createContext<boolean>(false);

export function AccessProvider({ pro, children }: { pro: boolean; children: ReactNode }) {
  return <ProContext.Provider value={pro}>{children}</ProContext.Provider>;
}

export function useServerPro(): boolean {
  return useContext(ProContext);
}
