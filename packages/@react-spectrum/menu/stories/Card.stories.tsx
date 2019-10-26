import {Card, MenuItem, Section, Heading, HStack, VStack, Avatar, Spacer, Text, Keyboard, Slot, Grid} from '../';
import More from '@spectrum-icons/workflow/More';
import React from 'react';
import {storiesOf} from '@storybook/react';
import {Divider} from "@react-spectrum/divider";
import customStyles from "../styles/custom-card.css";

console.log(customStyles);

storiesOf('Cards', module)
  .add(
    'Card default',
    () => (
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        <span style={{margin: '5px'}}>
        <Card>
            <Avatar slot="preview" src="https://scontent-sjc3-1.cdninstagram.com/vp/061c1b0fa69e3f36c24710f8d5603655/5E500437/t51.2885-15/sh0.08/e35/s640x640/72625830_117633199385660_495143751973844448_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=108" />
            <Avatar slot="avatar" src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
            <Slot slot="title"><HStack align-items="center"><Heading grow>Rob Snow</Heading><More /></HStack></Slot>
            <Section slot="body">Testing CSS Grid in Cards</Section>
            <Slot slot="divider">
              <Divider size="S" />
            </Slot>
            <Section slot="footer">Night sky</Section>
        </Card>
        </span>
        <span style={{margin: '5px'}}>
        <Card>
            <Avatar slot="preview" src="https://scontent-sjc3-1.cdninstagram.com/vp/061c1b0fa69e3f36c24710f8d5603655/5E500437/t51.2885-15/sh0.08/e35/s640x640/72625830_117633199385660_495143751973844448_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=108" />
            <Slot slot="title"><HStack align-items="center"><Heading grow>Rob Snow</Heading><More /></HStack></Slot>
            <Section slot="body">Testing CSS Grid in Cards</Section>
            <Slot slot="divider">
              <Divider size="S" />
            </Slot>
            <Section slot="footer">Night sky</Section>
        </Card>
        </span>
        <span style={{margin: '5px'}}>
        <Card>
            <Avatar slot="preview" src="https://scontent-sjc3-1.cdninstagram.com/vp/061c1b0fa69e3f36c24710f8d5603655/5E500437/t51.2885-15/sh0.08/e35/s640x640/72625830_117633199385660_495143751973844448_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=108" />
            <Avatar slot="avatar" src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
            <Slot slot="title"><HStack align-items="center"><Heading grow>Rob Snow</Heading><More /></HStack></Slot>
            <Section slot="body">Testing CSS Grid in Cards</Section>
        </Card>
        </span>
        <span style={{margin: '5px'}}>
        <Card>
            <Avatar slot="preview" src="https://scontent-sjc3-1.cdninstagram.com/vp/061c1b0fa69e3f36c24710f8d5603655/5E500437/t51.2885-15/sh0.08/e35/s640x640/72625830_117633199385660_495143751973844448_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=108" />
            <Avatar slot="avatar" src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
            <Slot slot="title"><HStack align-items="center"><Heading grow>Rob Snow</Heading><More /></HStack></Slot>
        </Card>
        </span>

        <span style={{margin: '5px'}}>
        <Card layout="horizontal">
            <Avatar slot="preview" src="https://scontent-sjc3-1.cdninstagram.com/vp/061c1b0fa69e3f36c24710f8d5603655/5E500437/t51.2885-15/sh0.08/e35/s640x640/72625830_117633199385660_495143751973844448_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=108" />
            <Avatar slot="avatar" src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
            <Slot slot="title"><HStack align-items="center"><Heading grow>Rob Snow</Heading><More /></HStack></Slot>
            <Section slot="body">Testing CSS Grid in Cards</Section>
            <Slot slot="divider">
              <Divider size="S" />
            </Slot>
            <Section slot="footer">Night sky</Section>
        </Card>
        </span>
        <span style={{margin: '5px'}}>
        <Card layout="horizontal">
            <Avatar slot="preview" src="https://scontent-sjc3-1.cdninstagram.com/vp/061c1b0fa69e3f36c24710f8d5603655/5E500437/t51.2885-15/sh0.08/e35/s640x640/72625830_117633199385660_495143751973844448_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=108" />
            <Slot slot="title"><HStack align-items="center"><Heading grow>Rob Snow</Heading><More /></HStack></Slot>
            <Section slot="body">Testing CSS Grid in Cards</Section>
        </Card>
        </span>
        <span style={{margin: '5px'}}>
        <Card layout="horizontal">
            <Avatar slot="preview" src="https://scontent-sjc3-1.cdninstagram.com/vp/061c1b0fa69e3f36c24710f8d5603655/5E500437/t51.2885-15/sh0.08/e35/s640x640/72625830_117633199385660_495143751973844448_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=108" />
            <Slot slot="title"><HStack align-items="center"><Heading grow>Rob Snow</Heading><More /></HStack></Slot>
        </Card>
        </span>


        <span style={{margin: '5px'}}>
        <Card slots={customStyles}>
            <Avatar slot="preview" src="https://scontent-sjc3-1.cdninstagram.com/vp/061c1b0fa69e3f36c24710f8d5603655/5E500437/t51.2885-15/sh0.08/e35/s640x640/72625830_117633199385660_495143751973844448_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=108" />
            <Avatar slot="avatar" src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
            <Slot slot="title"><HStack align-items="center"><Heading grow>Rob Snow</Heading><More /></HStack></Slot>
            <Section slot="body">Testing CSS Grid in Cards</Section>
            <Section slot="footer">Night sky</Section>
        </Card>
        </span>
        <span style={{margin: '5px'}}>
        <Card slots={customStyles}>
              <Avatar slot="avatar" src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
              <Slot slot="title"><HStack align-items="center"><Heading grow>Rob Snow</Heading><More /></HStack></Slot>
              <Section slot="body">Testing CSS Grid in Cards</Section>
              <Section slot="footer">Night sky</Section>
        </Card>
        </span>
        <span style={{margin: '5px'}}>
        <Card slots={customStyles}>
            <Slot slot="title"><HStack align-items="center"><Heading grow>Rob Snow</Heading><More /></HStack></Slot>
            <Section slot="body">Testing CSS Grid in Cards</Section>
            <Section slot="footer">Night sky</Section>
        </Card>
        </span>
        <span style={{margin: '5px'}}>
        <Card slots={customStyles}>
            <Avatar slot="avatar" src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
            <Slot slot="title"><HStack align-items="center"><Heading grow>Rob Snow</Heading><More /></HStack></Slot>
            <Section slot="body">Testing CSS Grid in Cards</Section>
        </Card>
        </span>
        <span style={{margin: '5px'}}>
        <Card slots={customStyles}>
            <Avatar slot="avatar" src="https://a5.behance.net/a9758425f0eaa6f4064d20ba73dfb7946a48f067/img/profile/no-image-138.png?cb=264615658" />
            <Slot slot="title"><HStack align-items="center"><Heading grow>Rob Snow</Heading><More /></HStack></Slot>
        </Card>
        </span>
      </div>
    )
  );
