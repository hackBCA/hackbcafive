export default function FooterSponsor({sponsor, href}) {
    return <span className="footer-sponsor mr-2">
        <style jsx>{`
        .footer-sponsor :global(svg) {
            fill: #E0F0FF;
            height: 2rem;
            opacity: 0.8;
        }

        .footer-sponsor a:hover :global(svg) {
            opacity: 1;
        }
        `}</style>
        {href ? <a href={href} target="_blank">{sponsor()}</a> : sponsor()}
    </span>
}