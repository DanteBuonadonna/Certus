"use client";

// ============================================================
// Certus — accessible dialog behaviour
//
// WHY THIS EXISTS
// Every modal in the app (signup gate, tutor, mock submit confirmation,
// upgrade prompts) was a plain <div> with a click-to-close backdrop. Three
// things were wrong with that, and all three are WCAG failures:
//
//   · No role="dialog" / aria-modal, so a screen reader never announced
//     that anything had opened — the user just heard new content appear
//     somewhere with no context. (4.1.2 Name, Role, Value)
//   · No Escape handler. The backdrop click is a MOUSE affordance; a
//     keyboard user had no way out at all. (2.1.2 No Keyboard Trap)
//   · Focus stayed behind the modal, so tabbing walked through the page
//     underneath it. (2.4.3 Focus Order)
//
// This hook fixes all three in two lines per modal. It deliberately does NOT
// implement a full focus trap — that needs care around portals and dynamic
// content, and a half-built trap is worse than none. It moves focus in, sends
// it back where it came from on close, and lets Escape work.
// ============================================================

import { useEffect, useRef } from "react";

export interface DialogProps {
  /** Spread onto the panel element (the card, not the backdrop). */
  // Typed loosely on purpose: this spreads onto a plain <div>, and pinning the
  // ref to a specific RefObject shape fights React's own Ref union.
  panelProps: React.HTMLAttributes<HTMLDivElement> & {
    ref: React.Ref<HTMLDivElement>;
    tabIndex: -1;
  };
}

/**
 * @param onClose  called on Escape
 * @param opts.label       accessible name, when there's no visible heading
 * @param opts.labelledBy  id of the visible heading — preferred over label
 */
export function useDialog(
  onClose: () => void,
  opts?: { label?: string; labelledBy?: string },
): DialogProps {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreTo = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Remember what had focus so it can go back there on close — otherwise
    // focus lands on <body> and a keyboard user restarts from the top of the
    // page every time they dismiss something.
    restoreTo.current = document.activeElement as HTMLElement | null;

    // Move focus into the dialog, unless something inside already claimed it
    // (an autoFocus input, typically).
    const panel = panelRef.current;
    if (panel && !panel.contains(document.activeElement)) panel.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    }
    document.addEventListener("keydown", onKey);

    // While a modal is open the page behind it shouldn't scroll.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      restoreTo.current?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    panelProps: {
      role: "dialog",
      "aria-modal": true,
      ...(opts?.labelledBy ? { "aria-labelledby": opts.labelledBy } : {}),
      ...(opts?.label && !opts?.labelledBy ? { "aria-label": opts.label } : {}),
      tabIndex: -1,
      ref: panelRef,
    },
  };
}
