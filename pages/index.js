import { Button, Flex, Heading, Text, Code } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';

export default function Home() {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      w="100vw"
      h="100vh"
      // maxW="300px"
    >
      <Heading as="h1">Fast Feedback</Heading>

      {/* <Text>
        Current user:
        <Code>{auth.user ? auth.user.email : 'none'}</Code>
      </Text> */}

      {auth.user ? (
        <>
          <Button mt={4} colorScheme="blue" onClick={(e) => auth.signout()}>
            Sign Out
          </Button>
        </>
      ) : (
        <Button
          mt={4}
          variant="link"
          size="sm"
          onClick={(e) => auth.signinWithGitHub()}
        >
          Sign In
        </Button>
      )}
    </Flex>
  );
}
