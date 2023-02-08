import React, { useEffect } from 'react'
import { getCharacterComics, getCharacterDetailState } from '../../redux/characterDetailSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { TabComponentProps } from '../../types/types';

const ComicsTabComponent: React.FC<TabComponentProps> = ({id, limit}) => {
    const dispatch = useAppDispatch();
    const state = useAppSelector(getCharacterDetailState);

    console.log("TAB: ", state)

    useEffect(() => {
        dispatch(getCharacterComics({id, limit}))
    }, [])

  return (
    <section>comics tab</section>
  )
}

export default ComicsTabComponent