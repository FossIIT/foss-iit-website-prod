import GradientSheet from "@/components/background/GradientSheet";
import Grids from "@/components/background/Grids";

export default function Background() {
    return (
        <div className="fixed inset-0 w-full overflow-hidden -z-10">
            <GradientSheet />
            <Grids />
        </div>
    );
}
