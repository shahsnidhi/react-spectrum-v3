import {Menu, MenuItem, Section, Heading, HStack, Avatar, Spacer, Text, Keyboard, Slot} from '../';
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
          <MenuItem>
              <Avatar slot="icon" src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
              <Heading slot="label">Congratulations</Heading>
              <Section slot="description">You won the lottery</Section>
          </MenuItem>
          <MenuItem>
              <Avatar slot="icon" src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
              <Heading slot="label">Your bank account</Heading>
              <Section slot="description">Prince of Nigeria wants to deposit $1M in your bank account, please provide your bank details to make it easier for the prince to transfer the money</Section>
          </MenuItem>
          <MenuItem>
              <Avatar slot="icon" src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
              <Heading slot="label">Upcoming Heat Wave</Heading>
              <Section slot="description">Hot weather sucks</Section>
          </MenuItem>
        </Menu>
      </Provider>
    )
  )
  .add(
    'Wifi Setting',
    () => (
      <Provider colorScheme="light">
        <Menu style={{width: '300px'}}>
          <MenuItem>
            <Text slot="label">Wi-Fi: Winternet is Coming</Text>
            <Slot slot="tools">
              <Switch />
            </Slot>
          </MenuItem>
          <MenuItem>
            <Text slot="label">Wi-Fi: XFinity Free</Text>
            <Slot slot="tools">
              <Switch />
            </Slot>
          </MenuItem>
          <MenuItem>
            <Text slot="label">Wi-Fi: One Legged Hershel</Text>
            <Slot slot="tools">
              <Switch />
            </Slot>
          </MenuItem>
        </Menu>
      </Provider>
    )
  )
  .add(
    'Wifi Selection',
    () => (
      <Provider colorScheme="light">
        <Menu style={{width: '300px'}}>
          <MenuItem>
            <Heading slot="label">AdobeGuest</Heading>
            <Section slot="description">Unsecured Network</Section>
            <Slot slot="tools">
              <ConfidenceFour />
            </Slot>
          </MenuItem>
          <MenuItem>
            <Heading slot="label">Winternet is Coming</Heading>
            <Section slot="description">Unsecured Network</Section>
            <Slot slot="tools">
              <ConfidenceTwo />
            </Slot>
          </MenuItem>
          <MenuItem>
            <Heading slot="label">One Legged Hershel</Heading>
            <Section slot="description">Unsecured Network</Section>
            <Slot slot="tools">
              <ConfidenceOne />
            </Slot>
          </MenuItem>
        </Menu>
      </Provider>
    )
  )
  .add(
    'Keyboard Shortcuts',
    () => (
      <Provider colorScheme="light">
        <Menu style={{width: '300px'}}>
          <MenuItem>
            <Text slot="label">Edit HTML</Text>
            <Keyboard slot="tools">⌘H</Keyboard>
          </MenuItem>
          <MenuItem>
            <Text slot="label">Copy</Text>
            <Keyboard slot="tools">⌘C</Keyboard>
          </MenuItem>
          <MenuItem>
            <Text slot="label">Emacs Save</Text>
            <Keyboard slot="tools">⌘X + ⌘S</Keyboard>
          </MenuItem>
        </Menu>
      </Provider>
    )
  )
  .add(
    'Tweet',
    () => (
      <Provider colorScheme="light">
        <Menu style={{width: '300px'}}>
          <MenuItem>
            <Avatar slot="icon" src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
            <Slot slot="label">
              <HStack>
                <Text>Rob Snow</Text>
                <Text><a href="#">@snowystinger</a></Text>
                <Spacer />
                <Text>1h</Text>
              </HStack>
            </Slot>
            <Text slot="description">I do not know how to use Twitter, is this too many characters for one tweet? who knows, it's an arbitrary number anyways, I just need it to go beyond three lines</Text>
          </MenuItem>
          <MenuItem>
            <Avatar slot="icon" src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
            <Slot slot="label">
              <HStack align-items="center">
                <Text>Devon Govett</Text>
                <Text grow><a href="#">@devongovett</a></Text>
                <Text>1h</Text>
              </HStack>
            </Slot>
            <Text slot="description">I am the tweet tweet master</Text>
          </MenuItem>
          <MenuItem>
              <Avatar slot="icon" src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
              <Slot slot="label">
                <HStack align-items="center">
                  <Text>Danni Robinson</Text>
                  <Text grow><a href="#">@shrug</a></Text>
                  <Text>1h</Text>
                </HStack>
              </Slot>
            <Text slot="description">What is nose goes?</Text>
          </MenuItem>
        </Menu>
      </Provider>
    )
  );
