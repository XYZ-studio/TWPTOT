export interface TabPanelProps {
  children: JSX.Element;
  value: string;
  index: string;
}

/**
 * @param {Object} TabPanel - tab panel props
 * @param {JSX.Element} TabPanel.children
 * @param {string} TabPanel.value
 * @param {string} TabPanel.index
 * @return {JSX | null}
**/
function TabPanel({children, value, index}: TabPanelProps) {
  return (value === index ? children : null);
}

export default TabPanel;
