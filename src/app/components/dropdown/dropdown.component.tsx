import { DropDownProps } from '@app/types';
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import { useFormikContext } from 'formik';
import { useState } from 'react';

const Dropdown = ({ items, defaultValue, fieldName, displayProp }: DropDownProps) => {
  const { setFieldValue } = useFormikContext();
  const getDisplayParams = (params: number | string): string | undefined => {
    console.log(params);
    const foundItem = items.find((item) => item[fieldName] === params);
    return foundItem ? foundItem[displayProp] : undefined;
  };
  // af dcm
  const [selectedItem, setSelectedItem] = useState(defaultValue);
  const handleDropdownChange = (params: any) => {
    setSelectedItem(params);
    setFieldValue(fieldName, params);
  };
  return (
    <>
      <input name={fieldName} value={selectedItem} onChange={() => {}} style={{ display: 'none' }} type="text" />

      <div className="w-full mb-5 focus:outline-none align-baseline border border-solid border-[#3A466480] border-opacity-[0.5] rounded-lg">
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button
              ripple={false}
              variant="text"
              className="w-full focus:outline-none text-xl "
              placeholder={'button'}
              name={fieldName}
              value={selectedItem}
            >
              {getDisplayParams(selectedItem) || defaultValue}
            </Button>
          </MenuHandler>
          <MenuList placeholder={'Dropdown'}>
            {items.map((item) => {
              return (
                <MenuItem
                  key={item[displayProp]}
                  className="w-full rounded-[10px] focus:outline-none focus:border-blue-500 "
                  onClick={() => handleDropdownChange(item[fieldName])}
                  placeholder={'menu'}
                >
                  {item[displayProp]}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </div>
    </>
  );
};

export default Dropdown;
