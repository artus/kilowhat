import { StyleSheet, View } from "react-native";
import { useMenuManager } from "../../../hooks/useMenuManager";
import { MenuEntry } from "../../atoms/menu/MenuEntry";
import { FadedOverlay } from "../../atoms/overlay/FadedOverlay";
import { FooterPopup } from "../../atoms/popups/FooterPopup";

export interface MenuEntry {
  text: string,
  onClick: () => void | Promise<void>
}

export const FooterMenu: React.FC = () => {

  const menuManager = useMenuManager();

  return menuManager.isVisible
    ? <View style={styles.container}>
      <FadedOverlay
        onClick={menuManager.hide}
      />
      <FooterPopup>
        {menuManager.entries.map((entry, index) => <MenuEntry
          key={index}
          text={entry.text}
          onClick={entry.onClick}
          isLast={index === menuManager.entries.length - 1}
        />)}
      </FooterPopup>
    </View>
    : <></>
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  }
})