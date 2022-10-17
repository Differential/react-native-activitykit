import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  GestureResponderEvent,
} from 'react-native';

import theme from '../config/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  content: {
    marginTop: 60,
  },
  tabBar: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 48,
    width: '100%',
    backgroundColor: '#FFF',
  },
  tab: {
    flex: 1,
    height: 48,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitle: {
    color: '#727070',
    fontSize: 16,
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
  },
});

type TabProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  selected: boolean;
};

const Tab: React.FC<TabProps> = ({ title, onPress, selected }: TabProps) => {
  console.log({ title });
  const selectedColor = selected ? { color: theme.colors.saucy } : {};
  const selectedBorder = selected
    ? { borderColor: theme.colors.saucy, borderBottomWidth: 1 }
    : {};
  return (
    <TouchableHighlight
      style={[styles.tab, selectedBorder]}
      onPress={onPress}
      underlayColor={'transparent'}
    >
      <Text style={[styles.tabTitle, selectedColor]}>{title}</Text>
    </TouchableHighlight>
  );
};

export type Page = {
  title: string;
  content: React.ReactNode;
};
type PagerProps = {
  pages: Page[];
};

const Pager = ({ pages }: PagerProps) => {
  const [page, setPage] = useState<number>(0);
  const currentPage = pages[page];
  if (!currentPage) return null;
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {pages.map((p, i) => {
          const selected = i === page;
          return (
            <Tab
              selected={selected}
              key={p.title}
              title={p.title}
              onPress={() => setPage(i)}
            />
          );
        })}
      </View>
      <View style={styles.content}>{currentPage.content}</View>
    </View>
  );
};

export default Pager;
