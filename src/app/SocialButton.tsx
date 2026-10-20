type ButtonProps = {
    social: {
        icon: string,
        link: string
    }
}

export function SocialButton({ social }: ButtonProps) {
    return (
        <div>
            <a href={social.link}>
                <svg width="36px" height="36px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path d={social.icon} />
                </svg>
            </a>
        </div>
    )
}
