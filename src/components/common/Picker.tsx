import React from 'react';

type KeyType = string | number;

interface PickerProps {
  data: Record<KeyType, string>;
  selected: KeyType;
  onChange: (value: KeyType) => void;
  className?: string;
}

const Picker: React.FC<PickerProps> = ({className, data, selected, onChange}) => (
  <select className={className} onChange={e => onChange(e.target.value)} value={selected}>
    { Object.entries(data).map(([key, value]) => (
      <option key={key} value={key}>{value}</option>
    )) }
  </select>
)

export default Picker;
