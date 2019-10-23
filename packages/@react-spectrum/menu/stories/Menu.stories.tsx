import {Menu, Item, MenuProps, Section, Heading, HStack, VStack, Avatar, Spacer, Text, Keyboard} from '../';
import {Switch} from '@react-spectrum/switch';
// no wifi icon??
import ConfidenceFour from '@spectrum-icons/workflow/ConfidenceFour';
import ConfidenceTwo from '@spectrum-icons/workflow/ConfidenceTwo';
import ConfidenceOne from '@spectrum-icons/workflow/ConfidenceOne';
import React from 'react';
import {storiesOf} from '@storybook/react';
import {Provider} from "@react-spectrum/provider";

storiesOf('Menu', module)
  // switching back to this story, styles don't quite compute correctly?? avatar ends up squished??
  .add(
    'Email',
    () => (
      <Provider colorScheme="light">
        <Menu style={{width: '250px'}}>
          <Item>
            <HStack align-items="center">
              <Avatar src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
              <VStack>
                <Heading>Congratulations</Heading>
                <Section>You won the lottery</Section>
              </VStack>
            </HStack>
          </Item>
          <Item>
            <HStack align-items="center">
              <Avatar src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
              <VStack>
                <Heading>Your bank account</Heading>
                <Section>Prince of Nigeria wants to deposit $1M in your bank account, please provide your bank details to make it easier for the prince to transfer the money</Section>
              </VStack>
            </HStack>
          </Item>
          <Item>
            <HStack align-items="center">
              <Avatar src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
              <VStack>
                <Heading>Upcoming Heat Wave</Heading>
                <Section>Hot weather sucks</Section>
              </VStack>
            </HStack>
          </Item>
        </Menu>
      </Provider>
    )
  )
  .add(
    'Wifi Setting',
    () => (
      <Provider colorScheme="light">
        <Menu style={{width: '300px'}}>
          <Item>
            <HStack align-items="center">
              <Text>Wi-Fi: Winternet is Coming</Text>
              <Spacer />
              <Switch />
            </HStack>
          </Item>
          <Item>
            <HStack align-items="center">
              <Text>Wi-Fi: XFinity Free</Text>
              <Spacer />
              <Switch />
            </HStack>
          </Item>
          <Item>
            <HStack align-items="center">
              <Text>Wi-Fi: One Legged Hershel</Text>
              <Spacer />
              <Switch />
            </HStack>
          </Item>
        </Menu>
      </Provider>
    )
  )
  .add(
    'Wifi Selection',
    () => (
      <Provider colorScheme="light">
        <Menu style={{width: '300px'}}>
          <Item>
            <HStack align-items="center">
              <VStack>
                <Heading>AdobeGuest</Heading>
                <Section>Unsecured Network</Section>
              </VStack>
              <Spacer />
              <ConfidenceFour />
            </HStack>
          </Item>
          <Item>
            <HStack align-items="center">
              <VStack>
                <Heading>Winternet is Coming</Heading>
                <Section>Unsecured Network</Section>
              </VStack>
              <Spacer />
              <ConfidenceTwo />
            </HStack>
          </Item>
          <Item>
            <HStack align-items="center">
              <VStack>
                <Heading>One Legged Hershel</Heading>
                <Section>Unsecured Network</Section>
              </VStack>
              <Spacer />
              <ConfidenceOne />
            </HStack>
          </Item>
        </Menu>
      </Provider>
    )
  )
  .add(
    'Wifi Setting with Children',
    () => render({})
  )
  .add(
    'Keyboard Shortcuts',
    () => (
      <Provider colorScheme="light">
        <Menu style={{width: '300px'}}>
          <Item>
            <HStack align-items="center">
              <Text>Edit HTML</Text>
              <Spacer />
              <Keyboard>⌘H</Keyboard>
            </HStack>
          </Item>
          <Item>
            <HStack align-items="center">
              <Text>Copy</Text>
              <Spacer />
              <Keyboard>⌘C</Keyboard>
            </HStack>
          </Item>
          <Item>
            <HStack align-items="center">
              <Text>Emacs Save</Text>
              <Spacer />
              <Keyboard>⌘X + ⌘S</Keyboard>
            </HStack>
          </Item>
        </Menu>
      </Provider>
    )
  )
  // must support grow because a spacer isn't enough, it won't cause an element to fill the remaining space
  // and maybe that element needs to put something visually aligned with both the start and end of the remaining space
  // and have something else under both that spans the full distance. if it was done with a spacer, the thing under wouldn't
  // go the full width
  // if two things must grow at unequal rates... that's going to be hard...
  .add(
    'Tweet',
    () => (
      <Provider colorScheme="light">
        <Menu style={{width: '300px'}}>
          <Item>
            <HStack align-items="center">
              <Avatar />
              <VStack grow>
                <HStack align-items="center">
                  <Text>Rob Snow</Text>
                  <Text>@snowystinger</Text>
                  <Spacer />
                  <Text>1h</Text>
                </HStack>
                <Text>I do not know how to use Twitter, is this too many characters for one tweet? who knows, it's an arbitrary number anyways</Text>
              </VStack>
            </HStack>
          </Item>
          <Item>
            <HStack align-items="center">
              <Avatar />
              <VStack grow>
                <HStack align-items="center">
                  <Text>Devon Govett</Text>
                  <Text>@devongovett</Text>
                  <Spacer />
                  <Text>1h</Text>
                </HStack>
                <Text>I am the tweet tweet master</Text>
              </VStack>
            </HStack>
          </Item>
          <Item>
            <HStack align-items="center">
              <Avatar />
              <VStack grow>
                <HStack align-items="center">
                  <Text>Danni Robinson</Text>
                  <Text>@shrug</Text>
                  <Spacer />
                  <Text>1h</Text>
                </HStack>
                <Text>What is nose goes?</Text>
              </VStack>
            </HStack>
          </Item>
        </Menu>
      </Provider>
    )
  )
  .add(
    'Card',
    () => render({})
  )
  .add(
    'Asset Card',
    () => render({})
  )
  .add(
    'Horizontal Card',
    () => render({})
  )
  .add(
    'Dialog',
    () => render({})
  )
  .add(
    'Dialog with Footer',
    () => render({})
  );

function render(props:MenuProps = {}) {
  return (
    <Menu {...props}>
      <Item>
        <VStack>
          <Heading>Email subject</Heading>
          <Section>Contents</Section>
        </VStack>
      </Item>
    </Menu>
  );
}
