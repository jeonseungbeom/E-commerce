const FormWrap = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center justify-center h-full pt-24 pb-12 min-h-fit">
            <div className="max-w-[650px] w-full flex flex-col gap-6 items-center shadow-xl shadow-slate-200 rounded-md p-4 md:p-8">
                {children}
            </div>
        </div>
    );
};

export default FormWrap;
