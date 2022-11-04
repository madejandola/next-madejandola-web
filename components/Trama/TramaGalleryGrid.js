
import { SRLWrapper } from 'simple-react-lightbox';
import { OPTIONS } from '@/utils/lightbox';
export default function TramaGalleryGrid({ children }) {
    return (
        <SRLWrapper options={OPTIONS}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {children}
            </div>
        </SRLWrapper>
    );
}
