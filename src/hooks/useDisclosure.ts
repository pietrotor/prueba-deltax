import { useState } from "react";

type Disclosure = {
  isOpen: boolean;
  data: any;
};

const useDisclosure = () => {
  const [Disclosure, setDisclosure] = useState<Disclosure>({
    isOpen: false,
    data: null,
  });

  const onClose = () => {
    setDisclosure({
      isOpen: false,
      data: null,
    });
  };

  const onOpen = (data?: any) => {
    setDisclosure({
      isOpen: true,
      data,
    });
  };

  return { isOpen: Disclosure.isOpen, data: Disclosure.data, onOpen, onClose };
};

export { useDisclosure };
