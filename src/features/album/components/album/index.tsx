import React from 'react'
import PropTypes from 'prop-types';
import { Album } from '../../model/Album';
import './styles.scss'
const AlbumItem = (props: Props) => {
    const album = props
    return (
        <div className="album">
            <div className="album__thumbnail">
                <img src={album.album.thumbnailUrl} alt={album.album.name} />

                {/* other control */}
            </div>
            <p className="album__name">{album.album.name}</p>
        </div>
    )
}

AlbumItem.propTypes = {
    album: PropTypes.array.isRequired,
}

export default AlbumItem

interface Props {
    album: Album
}