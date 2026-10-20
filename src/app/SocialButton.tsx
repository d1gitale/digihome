type ButtonProps = {
    social: {
        icon: string,
        link: string
    }
}

export default function SocialButton({ social }: ButtonProps) {
    return (
        <div>
            <a href={social.link}>
                <svg width="40px" height="40px" viewBox="0 0 24 24" className="p-0.5 hover:border-black hover:border-3" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path d={social.icon} />
                </svg>
            </a>
        </div>
    )
}
