const ICON_COLOR = "#1565C0";

export function CameraIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M2 7.5C2 6.67 2.67 6 3.5 6H6L7.2 4H14.8L16 6H18.5C19.33 6 20 6.67 20 7.5V16.5C20 17.33 19.33 18 18.5 18H3.5C2.67 18 2 17.33 2 16.5V7.5Z"
        stroke={ICON_COLOR}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="12" r="3.5" stroke={ICON_COLOR} strokeWidth="1.5" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="8" stroke={ICON_COLOR} strokeWidth="1.5" />
      <path
        d="M11 3C13 5.5 13 16.5 11 19M11 3C9 5.5 9 16.5 11 19M3.3 8.5H18.7M3.3 13.5H18.7"
        stroke={ICON_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ClipboardCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M7.5 4H14.5C14.5 5.1 13.6 6 12.5 6H9.5C8.4 6 7.5 5.1 7.5 4Z"
        stroke={ICON_COLOR}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 4H5.5C4.4 4 3.5 4.9 3.5 6V17C3.5 18.1 4.4 19 5.5 19H16.5C17.6 19 18.5 18.1 18.5 17V6C18.5 4.9 17.6 4 16.5 4H14.5"
        stroke={ICON_COLOR}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 12L9.7 14.2L14.5 9.5"
        stroke={ICON_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function KeyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="7" cy="14" r="4" stroke={ICON_COLOR} strokeWidth="1.5" />
      <path
        d="M10 11L17.5 3.5M17.5 3.5H21M17.5 3.5V7"
        stroke={ICON_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScaleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 2.5V19.5" stroke={ICON_COLOR} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 19.5H18" stroke={ICON_COLOR} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 6H19" stroke={ICON_COLOR} strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M3 6L0.5 11C0.5 12.4 1.7 13.5 3 13.5C4.3 13.5 5.5 12.4 5.5 11L3 6Z"
        stroke={ICON_COLOR}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M19 6L16.5 11C16.5 12.4 17.7 13.5 19 13.5C20.3 13.5 21.5 12.4 21.5 11L19 6Z"
        stroke={ICON_COLOR}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DashboardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="7" height="7" rx="1.3" stroke={ICON_COLOR} strokeWidth="1.5" />
      <rect x="12.5" y="2.5" width="7" height="4.5" rx="1.3" stroke={ICON_COLOR} strokeWidth="1.5" />
      <rect x="12.5" y="9.5" width="7" height="10" rx="1.3" stroke={ICON_COLOR} strokeWidth="1.5" />
      <rect x="2.5" y="12" width="7" height="7.5" rx="1.3" stroke={ICON_COLOR} strokeWidth="1.5" />
    </svg>
  );
}

export function CoinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="8.5" stroke={ICON_COLOR} strokeWidth="1.5" />
      <path
        d="M11 6.5V15.5M13.3 8.4C13.3 7.35 12.3 6.5 11 6.5C9.7 6.5 8.7 7.35 8.7 8.4C8.7 9.45 9.7 10 11 10C12.3 10 13.3 10.55 13.3 11.6C13.3 12.65 12.3 13.5 11 13.5C9.7 13.5 8.7 12.65 8.7 11.6"
        stroke={ICON_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
