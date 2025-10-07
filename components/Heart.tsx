// components/Heart.tsx
export function Heart({ className = "" }: { className?: string }) {
    // Classic smooth heart, looks like Rachel's and stays the same on all devices
    return (
      <svg
        viewBox="0 0 32 29"
        aria-hidden="true"
        className={className}
        fill="currentColor"
      >
        <path d="M23.6 0c-2.6 0-4.9 1.2-6.6 3.3C15.3 1.2 13 0 10.4 0 4.9 0 .5 4.4.5 9.9c0 6.2 5.6 10.2 13.9 18.2l2.6 2.4 2.6-2.4c8.3-8 13.9-12 13.9-18.2C33.5 4.4 29.1 0 23.6 0z" />
      </svg>
    );
  }
  