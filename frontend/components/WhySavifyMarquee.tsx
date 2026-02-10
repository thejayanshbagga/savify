"use client";

export default function WhySavifyMarquee() {
  const text = "Why Savify • Why Savify • Why Savify • Why Savify • Why Savify • ";

  return (
    <div className="overflow-hidden bg-brand-blue py-16 border-y border-brand-lightblue/20">
      <div className="marquee">
        <div className="track">
          <span className="marquee-text">{text}</span>
          <span className="marquee-text">{text}</span>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .track {
          display: flex;
          white-space: nowrap;
          animation: scroll 20s linear infinite;
        }

        .marquee-text {
          font-size: 3rem;
          font-weight: 700;
          color: rgba(216, 222, 233, 0.3);
          padding-right: 3rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
