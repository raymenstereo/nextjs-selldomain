import dynamic from "next/dynamic";

const Lottie = dynamic(() => import('react-lottie-player'), {
    ssr: false
});

const LottiePlayer = (props: any) => {
    return <Lottie {...props} />
}

export default LottiePlayer