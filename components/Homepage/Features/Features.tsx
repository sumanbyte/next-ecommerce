import Feature from "./Feature"

export default function Features() {
    return (
        <div className="bg-secondary-800">

            <div className="max-w-7xl m-auto  text-primary-100 py-10">
                <div className="lg:mb-20 md:mb-16 sm:mb-12 mb-10 text-center">
                    <h1 className=" lg:text-4xl md:text-3xl sm:text-2xl text-xl font-montserrat font-extrabold tracking-wider">Why Shop With Us ?</h1>
                    <p className="m-auto md:text-base sm:w-auto sm:text-sm text-xs px-2 tracking-wide">
                        Discover why our online store is the perfect choice for your shopping needs.
                    </p>
                </div>
                <div className="flex md:flex-row flex-col gap-10 md:px-5">
                    <Feature Icon={ShoppingCart} title="Wider Selection" description="Explore a vast range of products, from fashion to electronics and more." />

                    <Feature Icon={SecurePayments} title="Secure Payments" description="Shop with confidence, knowing your transactions are safe and secure." />

                    <Feature Icon={FastShipping} title="Fast Shipping" description="Enjoy swift and reliable delivery services for all your orders." />

                </div>
            </div>
        </div>
    )
}


export function ShoppingCart() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlSpace="preserve"><path fill="#FFB0AA" d="M195 10h160v137H195z" /><path fill="#6E83B7" d="m440 360 62-213H119.373L94.734 40H10v32h59.266L136 361.818V440h304v-32H168v-48z" /><circle fill="#EDEFF1" cx="168" cy="455" r="47" /><circle fill="#D3D3D3" cx="168" cy="455" r="20" /><circle fill="#EDEFF1" cx="366.286" cy="455" r="47" /><circle fill="#D3D3D3" cx="366.286" cy="455" r="20" /><path fill="#FFE352" d="M146 49h98v98h-98z" /><g><path fill="#FFB236" d="m211 81-16-6-16 6V49h32z" /></g><g><path fill="#FF7B7B" d="m296 52-21-8-21 8V10h42z" /></g><g><path fill="#80D6FB" d="M320 77h120v70H320z" /></g><g><path fill="#46BEE8" d="m396 109-16-6-16 6V77h32z" /></g></svg>
    )
}
export function SecurePayments() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><style>.cls-9{`fill:#231f20`}</style></defs><g id="Secure_Payment" data-name="Secure Payment"><rect x="6" y="6" width="40" height="28" rx="2" ry="2" style={{ fill: "#4ac6b7" }} /><path d="M44 6h-3a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2h3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" style={{ fill: "#37b7a4" }} /><path style={{ fill: "#29a892" }} d="M6 11h40v7H6z" /><path style={{ fill: "#1b967e" }} d="M43 11h3v7h-3z" /><circle cx="38" cy="26" r="3" style={{ fill: "#ffbc5a" }} /><circle cx="33" cy="26" r="3" style={{ fill: "#e05555" }} /><path d="M10.003 42C8.245 41.356 2 38.675 2 33.086v-8.144L10 22l8 2.942v8.144c0 5.616-6.237 8.276-7.997 8.914z" style={{ fill: "#d3dbef" }} /><path d="M10 34a.999.999 0 0 1-.707-.293l-2-2a1 1 0 0 1 1.414-1.414l1.185 1.185L12.2 28.4a1 1 0 1 1 1.6 1.2l-3 4a.998.998 0 0 1-.729.398A1.128 1.128 0 0 1 10 34z" style={{ fill: "#8491c1" }} /><path className="cls-9" d="M44 5H8a3.003 3.003 0 0 0-3 3v14.774l-3.345 1.23a1 1 0 0 0-.655.938v8.144c0 6.2 6.627 9.11 8.659 9.854a1.014 1.014 0 0 0 .343.06.996.996 0 0 0 .341-.06c1.81-.657 7.254-3.028 8.423-7.94H44a3.003 3.003 0 0 0 3-3V8a3.003 3.003 0 0 0-3-3zM7 12h38v5H7zm3.004 28.93C7.98 40.136 3 37.702 3 33.087V25.64l7-2.574 7 2.574v7.446c0 4.639-4.975 7.056-6.996 7.845zM45 32a1.001 1.001 0 0 1-1 1H19v-8.058a1 1 0 0 0-.655-.938l-8-2.943a1 1 0 0 0-.69 0L7 22.038V19h38zM7 10V8a1.001 1.001 0 0 1 1-1h36a1.001 1.001 0 0 1 1 1v2z" /><path className="cls-9" d="M33 30a3.96 3.96 0 0 0 2.49-.894 4 4 0 1 0 0-6.212A3.96 3.96 0 0 0 33 22a4 4 0 0 0 0 8zm7-4a2.002 2.002 0 0 1-2 2 1.968 1.968 0 0 1-1.302-.486 3.948 3.948 0 0 0 0-3.028A1.968 1.968 0 0 1 38 24a2.002 2.002 0 0 1 2 2zm-7-2a2 2 0 1 1-2 2 2.002 2.002 0 0 1 2-2zM12.2 28.4l-2.308 3.078-1.185-1.185a1 1 0 0 0-1.414 1.414l2 2A.999.999 0 0 0 10 34a.882.882 0 0 0 .07-.003.998.998 0 0 0 .73-.397l3-4a1 1 0 1 0-1.6-1.2z" /></g></svg>

}
export function FastShipping() {
    return <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 64 64"
        xmlSpace="preserve"
    >
        <style>
            {`.st0{fill:#ffefe4}.st4{fill:#d476e2}.st5{fill:#5861c7}.st6{fill:#ff8354}.st7{fill:#6770e6}.st14{fill:#ffa171}`}
        </style>
        <path d="M45 45H2v4.016c0 .543.441.984.984.984H45v-5z" style={{ fill: '#edd4c2' }} />
        <path className="st0" d="M41 45H2a2 2 0 0 1-2-2V15a2 2 0 0 1 2-2h34a5 5 0 0 1 5 5v27z" />
        <path
            d="M36 13H2a2 2 0 0 0-2 2v1a2 2 0 0 1 2-2h34a5 5 0 0 1 5 5v-1a5 5 0 0 0-5-5z"
            style={{ fill: '#fff7f2' }}
        />
        <path className="st6" d="M41 45h4.003a6 6 0 0 1 6 6.018L51 52h9a3 3 0 0 0 3-3V33.232l-3.412-12.994A3.001 3.001 0 0 0 56.686 18H41v27z" />
        <path className="st14" d="M59.243 19.446A2.993 2.993 0 0 0 56.686 18H41v1h16.686c.566 0 1.098.166 1.557.446" />
        <circle className="st7" cx="45" cy="51" r="6" />
        <circle className="st5" cx="45" cy="51" r="3" />
        <circle className="st7" cx="9" cy="51" r="6" />
        <circle className="st5" cx="9" cy="51" r="3" />
        <path d="M63 45h-6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" style={{ fill: '#e0734a' }} />
        <path d="M45 23v8.7a2 2 0 0 0 1.188 1.828l7.231 3.214c.383.17.798.258 1.218.258H63v-3.768L59.788 21H47a2 2 0 0 0-2 2z" style={{ fill: '#69ebfc' }} />
        <path className="st4" d="M62 44h1v-5h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2zM0 57h64v7H0z" />
        <path style={{ fill: '#b665c2' }} d="M0 62h64v2H0z" />
        <path className="st6" d="M23 15H1.5a1.5 1.5 0 0 1 0-3H23v3zM24 21H6.5a1.5 1.5 0 0 1 0-3H24v3zM23 27H1.5a1.5 1.5 0 0 1 0-3H23v3zM23 9H3.5a1.5 1.5 0 0 1 0-3H23v3z" />
        <circle className="st6" cx="22.5" cy="13.5" r="13.5" />
        <circle className="st0" cx="22.5" cy="13.5" r="10.385" />
        <path className="st6" d="M30 14h-7a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2zM23 3H6.5a1.5 1.5 0 0 1 0-3H23v3z" />
        <path className="st14" d="M6.5 1H23v.025c7.053.259 12.713 5.918 12.975 12.969.006-.165.025-.327.025-.494C36 6.213 30.222.29 23 .025V0H6.5A1.5 1.5 0 0 0 5 1.5c0 .176.036.343.092.5.206-.581.756-1 1.408-1" />
        <path className="st6" d="M10.5 3a1.5 1.5 0 0 1 0 3H14V3h-3.5zM7.5 9a1.5 1.5 0 0 1 0 3H11V9H7.5zM7.5 15a1.5 1.5 0 0 1 0 3H11v-3H7.5zM10.5 21a1.5 1.5 0 0 1 0 3H14v-3h-3.5z" />
    </svg>

}