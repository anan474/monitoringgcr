import { Box, Text, Input } from "@chakra-ui/react";

export const InputElement = ({
  label,
  isPassword = false,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <Box mt="12px">
      <Text fontSize="l" fontWeight="500" mb="8px">
        {label}
      </Text>
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={isPassword ? "password" : "text"}
        p="24px"
        borderColor="#8692A6"
      />
    </Box>
  );
};
