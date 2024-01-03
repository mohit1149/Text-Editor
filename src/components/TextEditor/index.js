import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  BgContainer,
  BgCard,
  ImageContainer,
  Image,
  TextHeading,
  RightContainer,
  Button1,
  Button2,
  Button3,
  ButtonContainer,
  TextContent,
  ListContainer,
} from './styledComponents'

const boldDeActive = 'normal'
const boldActive = 'bold'
const italianDeActive = 'normal'
const italianActive = 'italic'
const underlineDeActive = 'normal'
const underlineActive = 'underline'
const whiteColor = '#f1f5f9'
const yellowColor = '#faff00'

class TextEditor extends Component {
  state = {
    activeItalian: italianDeActive,
    activeBold: boldDeActive,
    activeUnderline: underlineDeActive,
    activeBoldColor: whiteColor,
    activeItalianColor: whiteColor,
    activeUnderlineColor: whiteColor,
  }

  onClickBold = () => {
    const {activeBold} = this.state
    if (activeBold === boldDeActive) {
      this.setState({activeBold: boldActive, activeBoldColor: yellowColor})
    } else {
      this.setState({activeBold: boldDeActive, activeBoldColor: whiteColor})
    }
  }

  onClickItalic = () => {
    const {activeItalian} = this.state
    if (activeItalian === italianDeActive) {
      this.setState({
        activeItalian: italianActive,
        activeItalianColor: yellowColor,
      })
    } else {
      this.setState({
        activeItalian: italianDeActive,
        activeItalianColor: whiteColor,
      })
    }
  }

  onClickUnderline = () => {
    const {activeUnderline} = this.state
    if (activeUnderline === underlineDeActive) {
      this.setState({
        activeUnderline: underlineActive,
        activeUnderlineColor: yellowColor,
      })
    } else {
      this.setState({
        activeUnderline: underlineDeActive,
        activeUnderlineColor: whiteColor,
      })
    }
  }

  render() {
    const {
      activeBold,
      activeUnderline,
      activeItalian,
      activeBoldColor,
      activeItalianColor,
      activeUnderlineColor,
    } = this.state
    return (
      <BgContainer>
        <BgCard>
          <ImageContainer>
            <TextHeading>Text Editor</TextHeading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <RightContainer>
            <ButtonContainer>
              <ListContainer>
                <Button1
                  data-testid="bold"
                  onClick={this.onClickBold}
                  activeBoldColor={activeBoldColor}
                >
                  <VscBold size={25} />
                </Button1>
              </ListContainer>
              <ListContainer>
                <Button2
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  activeItalianColor={activeItalianColor}
                >
                  <GoItalic size={25} />
                </Button2>
              </ListContainer>
              <ListContainer>
                <Button3
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  activeUnderlineColor={activeUnderlineColor}
                >
                  <AiOutlineUnderline size={25} />
                </Button3>
              </ListContainer>
            </ButtonContainer>
            <TextContent
              activeBold={activeBold}
              activeItalian={activeItalian}
              activeUnderline={activeUnderline}
            />
          </RightContainer>
        </BgCard>
      </BgContainer>
    )
  }
}

export default TextEditor
