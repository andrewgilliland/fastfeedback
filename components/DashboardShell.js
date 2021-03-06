import React from 'react';
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';

const DashboardShell = ({children}) => (
  <Flex flexDirection="column">
    <Flex
      backgroundColor="white"
      justifyContent="space-between"
      alignItems="center"
      p={4}
    >
      <Stack spacing={4} isInline alignItems="center">
        <ChatIcon />
        <Link>Feedback</Link>
        <Link>Sites</Link>
      </Stack>
      <Stack spacing={2} isInline alignItems="center">
        <Link mr={4}>Account</Link>
        <Avatar size="sm" />
      </Stack>
    </Flex>
    <Flex backgroundColor="gray.100" p={8}>
      <Flex maxWidth={800} ml="auto" mr="auto">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </BreadcrumbItem>
          <Heading>My Sites</Heading>
          {children}
        </Breadcrumb>
      </Flex>
    </Flex>
  </Flex>
);

export default DashboardShell;
