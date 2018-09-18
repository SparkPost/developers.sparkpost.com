/* eslint-disable no-useless-escape */
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import isEmail from 'isemail'
import { color, grayscale } from 'utils/colors'
import { monospace } from 'utils/fonts'
import { weight } from 'utils/fonts'
import Panel from 'components/Panel'
import Markdown from 'components/Markdown'
import Button from 'components/Button'

// prettier-ignore
const Sample = styled.pre`
  padding: 1rem;
  margin: 0;
  background: transparent;
  color: ${grayscale('medium')};
  overflow: auto;

  pre {
    background: transparent;
    padding: 0;
    margin: 0;
  }

  display: none;

  ${props => props.isActive && `
    display: block;
  `}
`

const Tabs = styled.div`
  border-bottom: 1px solid ${grayscale('light')};
  padding: 0 1rem;
`

// prettier-ignore
const Tab = styled.button`
  background: transparent;
  border-width: 3px 0;
  border-style: solid;
  border-color: transparent;
  padding: 0.65rem 0;
  margin: 0 0.5rem;
  color: ${grayscale(4)};
  font-size: 0.777777778rem;
  font-weight: ${weight('medium')};
  outline: 0;
  bottom: -1px;
  cursor: pointer;

  ${props => props.isActive ? `
    border-bottom-color: ${color('orange')};
    color: ${color('orange')};
  ` : `
    &:hover {
      color: ${grayscale(3)};
      border-bottom-color: ${grayscale(8)};
    }
  `}
`

const fromAddress = 'testing@sparkpostbox.com'
const subject = 'Oh hey'
const html = `<html><body><p>Testing SparkPost - the most awesomest email service!</p></body></html>`

const samples = [
  {
    label: `cURL`,
    language: `bash`,
    code: `curl -XPOST https://api.sparkpost.com/api/v1/transmissions
  -H "Authorization: <YOUR API KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
      "options": { "sandbox": true },
      "content": {
      "from": "${fromAddress}",
      "subject": "${subject}",
      "html": "${html}"
    },
    "recipients": [ { "address": "developers+curl@sparkpost.com" } ]
  }'`,
  },
  {
    label: `Node.js`,
    language: `javascript`,
    code: `const SparkPost = require('sparkpost');
const sparky = new SparkPost('<YOUR API KEY>');

sparky.transmissions.send({
  options: { sandbox: true },
  content: {
    from: '${fromAddress}',
    subject: '${subject}',
    html:'${html}'
  },
  recipients: [ { address: 'developers+nodejs@sparkpost.com' } ]
})
.then(data => {
  console.log('Woohoo! You just sent your first mailing!');
})
.catch(err => {
  console.log('Whoops! Something went wrong');
});`,
  },
  {
    label: `Python`,
    language: `python`,
    code: `from sparkpost import SparkPost

sparky = SparkPost('<YOUR API KEY>')

response = sparky.transmissions.send(
    use_sandbox = True,
    recipients = ['developers+python@sparkpost.com'],
    html = '${html}',
    from_email = '${fromAddress}',
    subject = '${subject}')`,
  },
  {
    label: `PHP`,
    language: `php`,
    code: `<?php
use SparkPost\SparkPost;
use GuzzleHttp\Client;
use Http\Adapter\Guzzle6\Client as GuzzleAdapter;

$httpClient = new GuzzleAdapter(new Client());
$sparky = new SparkPost($httpClient, ['key' => '<YOUR API KEY>']);

$sparky->setOptions(['async' => false]);
$results = $sparky->transmissions->post([
  'options' => [
    'sandbox' => true
  ],
  'content' => [
    'from' => '${fromAddress}',
    'subject' => '${subject}',
    'html' => '${html}'
  ],
  'recipients' => [
    ['address' => ['email'=>'developers+php@sparkpost.com']]
  ]
]);
?>`,
  },
  {
    label: `Java`,
    language: `java`,
    code: `package com.sparkpost;

import com.sparkpost.exception.SparkPostException;

public class SparkPost {

    public static void main(String[] args) throws SparkPostException {
        String API_KEY = "<YOUR API KEY>";
        Client sparky = new Client(API_KEY);

        sparky.sendMessage(
                "${fromAddress}",
                "developers+java@sparkpost.com",
                "${subject}",
                "Testing SparkPost - the most awesomest email service!",
                "${html}");
    }
}`,
  },
  {
    label: `Go`,
    language: `go`,
    code: `package main

import (
    sp "github.com/SparkPost/gosparkpost"
    "log"
)

func main() {
    var sparky sp.Client
    err := sparky.Init(&sp.Config{ApiKey: "<YOUR API KEY>"})
    if err != nil {
        log.Fatalf("SparkPost client init failed: %s\\n", err)
    }

    tx := &sp.Transmission{
        Recipients: []string{"developers+go@sparkpost.com"},
        Options:    &sp.TxOptions{Sandbox: true},
        Content: sp.Content{
            HTML:    "${html}",
            From:    "${fromAddress}",
            Subject: "${subject}",
        },
    }
    id, _, err := sparky.Send(tx)
    if err != nil {
        log.Fatal(err)
    }

    log.Printf("Transmission sent with id [%s]\\n", id)
}`,
  },
  {
    label: `Elixir`,
    language: `elixir`,
    code: `alias SparkPost.{Content, Transmission}

defmodule MyApp do
  def main(args) do
    Transmission.send(%Transmission{
      recipients: ["developers+elixir@sparkpost.com"],
      content: %Content.Inline{
        from: "${fromAddress}",
        subject: "${subject}",
        html: "${html}",
      },
      options: %Transmission.Options{sandbox: true}
    })
  end
end`,
  },
  {
    label: `C#`,
    language: `csharp`,
    code: `// Maintained by community member Darren Cauthon, endorsed by SparkPost
using SparkPost;

var transmission = new Transmission();
transmission.Content.From.Email = "${fromAddress}";
transmission.Content.Subject = "${subject}";
transmission.Content.Html = "${html}";

var recipient = new Recipient
{
  Address = new Address { Email = "developers+csharp@sparkpost.com" }
};
transmission.Recipients.Add(recipient);

var sparky = new Client("<YOUR API KEY>");
sparky.Transmissions.Send(transmission);`,
  },
]

const Action = styled.div`
  border-top: 1px solid ${grayscale(8)};
  background: ${grayscale('light')};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.666666667rem;

  ${Button} {
    margin: 0;
  }
`

const Response = styled(({ children, ...props }) => (
  <div {...props}>
    <h5>JSON response</h5>
    <pre>{children}</pre>
  </div>
))`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background: ${rgba(grayscale('white'), 0.96)};
  border: 1px solid ${grayscale(9)};
  box-shadow: 0 2px 13px 0 rgba(65, 65, 70, 0.1);
  border-radius: 4px;
  width: 60%;
  max-width: 450px;

  h5 {
    font-size: 14px;
    font-weight: ${weight('medium')};
    color: ${grayscale(1)};
    text-align: center;
    border-bottom: 1px solid ${grayscale(9)};
    margin: 0;
    padding: 0.666666667rem;
  }

  pre {
    background: white;
    margin: 0;
    padding: 1rem 0.666666667rem;
    line-height: 1.15rem;
    ${monospace};
  }
`

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0,
      isSending: false,
      email: '',
    }
  }

  setActiveIndex = i => {
    this.setState({ activeIndex: i })
  }

  handleChange = ({ target }) => {
    this.setState({ email: target.value })
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.response) {
      setTimeout(() => this.props.nextStep(), 1000)
    }
  }

  render() {
    const { sendEmail, response } = this.props

    return (
      <Fragment>
        <Tabs>
          {samples.map(({ label }, i) => (
            <Tab
              key={label}
              isActive={this.state.activeIndex === i}
              onClick={() => this.setActiveIndex(i)}
            >
              {label}
            </Tab>
          ))}
        </Tabs>
        {samples.map(({ label, language, code }, i) => (
          <Sample key={label} isActive={this.state.activeIndex === i}>
            <Markdown>{`\`\`\`${language}\n${code}\n\`\`\``}</Markdown>
          </Sample>
        ))}
        <Action>
          <input
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            placeholder="you@youremail.com"
          />
          <Button
            size="small"
            primary
            disabled={
              !isEmail.validate(this.state.email) || this.state.isSending
            }
            onClick={() => {
              this.setState({ isSending: true })
              sendEmail(this.state.email)
            }}
          >
            {this.state.isSending ? 'Sending...' : 'Run Code'}
          </Button>
        </Action>
        {response && <Response>{response}</Response>}
      </Fragment>
    )
  }
}

export default Form
