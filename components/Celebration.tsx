import { useEffect } from 'react';
import { runFireworks } from '@/lib/confetti';

interface CelebrationProps {
    trigger: boolean;
}

const Celebration: React.FC<CelebrationProps> = ({ trigger }) => {
    useEffect((): void => {
        if (trigger) {
            runFireworks();
        }
    }, [trigger]);

    return null;
};

export default Celebration;