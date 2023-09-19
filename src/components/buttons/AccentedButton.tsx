type Props = {
    label: string;
};

export default function AccentedButton({ label }: Props) {
    return (
        <div className="w-full sm:w-auto">
            <button className="h-10 w-max rounded-xl bg-accent-dark px-8 font-medium shadow">
                {label}
            </button>
        </div>
    );
}
