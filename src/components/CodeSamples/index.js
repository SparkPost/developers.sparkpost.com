/* eslint-disable no-useless-escape */
import React, { Component } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { color, grayscale } from 'utils/colors'
import { weight } from 'utils/fonts'

import Markdown from 'components/Markdown'

const Wrapper = styled.div`
  background: ${grayscale('white')};
  border-radius: 4px;
  box-shadow: 0 10px 31px -13px ${rgba(grayscale('dark'), 0.1)},
    0 12px 20px -9px ${rgba('#3D3D49', 0.1)};
  min-height: 300px;
`

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
    code: `curl -XPOST https://api.sparkpost.com/api/v1/transmissions \\
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

class CodeSamples extends Component {
  constructor(props) {
    super(props)

    this.state = { activeIndex: 0 }
  }

  setActiveIndex = i => {
    this.setState({ activeIndex: i })
  }

  render() {
    return (
      <Wrapper>
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
      </Wrapper>
    )
  }
}

export default CodeSamples
