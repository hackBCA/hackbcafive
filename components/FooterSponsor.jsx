export default function FooterSponsor({sponsor, href}) {
    return <span className="footer-sponsor mr-2">
        <style jsx>{`
        .footer-sponsor {
            vertical-align: middle;
        }
        
        .footer-sponsor :global(svg) {
            fill: #E0F0FF;
            height: 2rem;
        }

        .footer-sponsor :global(a) {
            color: #E0F0FF;
            opacity: 0.8;
        }

        .footer-sponsor a:hover {
            opacity: 1;
        }
        `}</style>
        {href ? <a href={href} target="_blank">{sponsor()}</a> : sponsor()}
    </span>
}