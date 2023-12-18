interface BackDropProps {
    onClick: () => void;
}

const BackDrop: React.FC<BackDropProps> = ({ onClick }) => {
    return <div onClick={onClick} className="fixed top-0 left-0 z-20 w-screen h-screen opacity-50 bg-sky-200"></div>;
};

export default BackDrop;
