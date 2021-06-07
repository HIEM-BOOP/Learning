
import { useState } from 'react';
import { Album } from '../model/Album';
import AlbumList from './../components/albumList/index';
const AlbumFeature = () => {
    const [state, setState] = useState<Album[]>(
        [{
            id: 1,
            name: "Dance All Night",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/5/a/5/55a5f8be0f086195c95b1b99968bf317.jpg",
        }, {
            id: 2,
            name: "We Are Young",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/6/0/d/060d24699dcd3c97a125435bdbb04172.jpg",
        },
        {
            id: 3,
            name: "Party All Night",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/c/5/4/3c54732ace331c5a045135fe2d144e77.jpg",
        },
        {
            id: 4,
            name: "Can't Stop The Party!",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/2/b/2/02b24e7c08d0c5b46999717adaf6b3f3.jpg",
        },
        {
            id: 5,
            name: "T.G.I.F",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/e/d/4/4/ed441df0f8f40c6eaca2be888be6e325.jpg",
        }]
    );
    
    const albumList  = state
    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList ={albumList} />
        </div>
    )
}

export default AlbumFeature
