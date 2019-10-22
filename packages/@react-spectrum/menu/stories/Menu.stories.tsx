import {Menu, Item, MenuProps, Section, Heading, HStack, VStack, Avatar, WifiMenu, Spacer, Text} from '../';
import {Switch} from '@react-spectrum/switch';
// no wifi icon??
import VolumeThree from '@spectrum-icons/workflow/VolumeThree';
import React from 'react';
import {storiesOf} from '@storybook/react';

storiesOf('Menu', module)
  // switching back to this story, styles don't quite compute correctly?? avatar ends up squished??
  .add(
    'Email',
    () => (
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
    )
  )
  .add(
    'Wifi Setting',
    () => (
      <WifiMenu style={{width: '300px'}}>
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
      </WifiMenu>
    )
  )
  .add(
    'Wifi Selection',
    () => (
      <WifiMenu style={{width: '300px'}}>
        <Item>
          <HStack align-items="center">
            <VStack>
              <Heading>AdobeGuest</Heading>
              <Section>Unsecured Network</Section>
            </VStack>
            <Spacer />
            <VolumeThree />
          </HStack>
        </Item>
        <Item>
          <HStack align-items="center">
            <VStack>
              <Heading>Winternet is Coming</Heading>
              <Section>Unsecured Network</Section>
            </VStack>
            <Spacer />
            <VolumeThree />
          </HStack>
        </Item>
        <Item>
          <HStack align-items="center">
            <VStack>
              <Heading>One Legged Hershel</Heading>
              <Section>Unsecured Network</Section>
            </VStack>
            <Spacer />
            <VolumeThree />
          </HStack>
        </Item>
      </WifiMenu>
    )
  )
  .add(
    'Wifi Setting with Children',
    () => render({})
  )
  .add(
    'Keyboard Shortcuts',
    () => render({})
  )
  .add(
    'Tweet',
    () => render({})
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
