import { createSlice } from '@reduxjs/toolkit'

interface Menu {
    isOpen: boolean
}


export const sliceMenu = createSlice({
    name: 'menu',
    initialState: {
        isOpen: false
    },
    reducers: {
        menuOpen(state) {
            return { ...state, isOpen: true }
        },
        menuClose(state) {
            return { ...state, isOpen: false }
        },
    }
})

export const { menuOpen, menuClose } = sliceMenu.actions

export const useMenu = (state: any) => {
    return state.menu as Menu
}

export default sliceMenu.reducer