import React from 'react';
import { Album } from '../../model/Album';
import AlbumItem from './../album/index';
import PropTypes from 'prop-types';
import './styles.scss';
const AlbumList = (props: Props) => {
  const { albumList } = props;
  return (
    <ul className="album-list">
      {albumList.map((album) => (
        <li key={album.id}>
          <AlbumItem album={album} />
        </li>
      ))}
    </ul>
  );
};

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

export default AlbumList;

export interface Props {
  albumList: Album[];
}
