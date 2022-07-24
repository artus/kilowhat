import { useState } from "react";
import { singletonHook } from "react-singleton-hook";
import { MenuEntry } from "../components/molecules/menu/FooterMenu";

const initialState = { isVisible: false, entries: [] };

interface MenuState {
  isVisible: boolean,
  entries: MenuEntry[]
}

const useMenuManagerImpl = () => {

  const [state, setState] = useState<MenuState>(initialState);

  const show = (entries: MenuEntry[]) => {

    const wrappedEntries = entries.map(entry => ({
      text: entry.text,
      onClick: () => {
        hide();
        entry.onClick()
      }
    }));

    setState({
      isVisible: true,
      entries: wrappedEntries
    });
  }

  const hide = () => {
    setState(initialState);
  }

  return {
    isVisible: state.isVisible,
    entries: state.entries,
    show,
    hide
  };

};

export const useMenuManager = singletonHook({
  ...initialState,
  show: () => { },
  hide: () => { }
}, useMenuManagerImpl);