import { DropDownProps } from '@app/types';
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import { useFormikContext } from 'formik';
import { useState } from 'react';

const Dropdown = ({ items, defaultValue }: DropDownProps) => {
  const { setFieldValue } = useFormikContext();
  const getNameByRole = (role: number): string | undefined => {
    const foundItem = items.find((item) => item.role === role);
    return foundItem?.name;
  };

  const [selectedItem, setSelectedItem] = useState(defaultValue);
  const handleDropdownChange = (role: any) => {
    setSelectedItem(role);
    setFieldValue('role', role);
  };
  return (
    <>
      <input name="role" value={selectedItem} onChange={() => {}} style={{ display: 'none' }} type="text" />

      <div className="w-full mb-5 focus:outline-none align-baseline border border-solid border-[#3A466480] border-opacity-[0.5] rounded-lg">
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button
              ripple={false}
              variant="text"
              className="w-full focus:outline-none text-xl "
              placeholder={'button'}
              name="role"
              value={selectedItem}
            >
              {getNameByRole(selectedItem)}
            </Button>
          </MenuHandler>
          <MenuList placeholder={'Dropdown'}>
            {items.map(({ name, role }) => {
              return (
                <MenuItem
                  key={name}
                  className="w-full rounded-[10px] focus:outline-none focus:border-blue-500 "
                  onClick={() => handleDropdownChange(role)}
                  placeholder={'menu'}
                >
                  {name}
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
