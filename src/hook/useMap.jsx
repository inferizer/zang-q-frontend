import { MapContext } from '../context/map_context'
import { useContext } from 'react'

export function useMap() {
    return useContext(MapContext)
}
