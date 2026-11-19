export function SectionFade({ position }: { position: "top" | "bottom" }) {
        return (
                <div
                        aria-hidden
                        className={`pointer-events-none absolute inset-x-0 h-24 sm:h-32 ${
                                position === "top"
                                        ? "top-0 bg-gradient-to-b from-white to-transparent"
                                        : "bottom-0 bg-gradient-to-t from-white to-transparent"
                        }`}
                />
        );
}