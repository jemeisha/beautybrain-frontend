export default function Container({ children, className }) {
    return (
        <div
            className={`px-5 md:px-10 lg:px-25 xl:px-40 xxl:px-75 2xl:px-64 3xl:px-[20rem] 4xl:px-[25rem] ${className}`}
        >
            {children}
        </div>
    );
}
