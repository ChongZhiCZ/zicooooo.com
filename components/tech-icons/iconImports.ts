import Antd from 'public/static/techicons/Antd.svg'
import Antv from 'public/static/techicons/Antv.svg'
import Axios from 'public/static/techicons/Axios.svg'
import Blazor from 'public/static/techicons/Blazor.svg'
import BootStrap from 'public/static/techicons/BootStrap.svg'
import ChainLink from 'public/static/techicons/ChainLink.svg'
import Chatjs from 'public/static/techicons/Chat.js.svg'
import ChatBot from 'public/static/techicons/ChatBot.svg'
import Confluence from 'public/static/techicons/Confluence.svg'
import Csharp from 'public/static/techicons/Csharp.svg'
import css3 from 'public/static/techicons/css3.svg'
import docker from 'public/static/techicons/docker.svg'
import dotnet from 'public/static/techicons/dotnet.svg'
import eslint from 'public/static/techicons/eslint.svg'
import ethereum from 'public/static/techicons/ethereum.svg'
import ethers from 'public/static/techicons/ethers.svg'
import gin from 'public/static/techicons/gin.svg'
import git from 'public/static/techicons/git.svg'
import githubactions from 'public/static/techicons/githubactions.svg'
import githubcopilot from 'public/static/techicons/githubcopilot.svg'
import go from 'public/static/techicons/go.svg'
import goland from 'public/static/techicons/goland.svg'
import html5 from 'public/static/techicons/html5.svg'
import ipfs from 'public/static/techicons/ipfs.svg'
import javascript from 'public/static/techicons/javascript.svg'
import jellyfin from 'public/static/techicons/jellyfin.svg'
import jenkins from 'public/static/techicons/jenkins.svg'
import jsonwebtokens from 'public/static/techicons/jsonwebtokens.svg'
import linux from 'public/static/techicons/linux.svg'
import markdown from 'public/static/techicons/markdown.svg'
import mysql from 'public/static/techicons/mysql.svg'
import nextdotjs from 'public/static/techicons/nextdotjs.svg'
import nodedotjs from 'public/static/techicons/nodedotjs.svg'
import notion from 'public/static/techicons/notion.svg'
import nuget from 'public/static/techicons/nuget.svg'
import nvm from 'public/static/techicons/nvm.svg'
import openai from 'public/static/techicons/openai.svg'
import openzeppelin from 'public/static/techicons/openzeppelin.svg'
import pnpm from 'public/static/techicons/pnpm.svg'
import postgresql from 'public/static/techicons/postgresql.svg'
import postman from 'public/static/techicons/postman.svg'
import prettier from 'public/static/techicons/prettier.svg'
import rabbitmq from 'public/static/techicons/rabbitmq.svg'
import react from 'public/static/techicons/react.svg'
import redux from 'public/static/techicons/redux.svg'
import resharper from 'public/static/techicons/resharper.svg'
import sass from 'public/static/techicons/sass.svg'
import solidity from 'public/static/techicons/solidity.svg'
import sqlite from 'public/static/techicons/sqlite.svg'
import swagger from 'public/static/techicons/swagger.svg'
import tailwindcss from 'public/static/techicons/tailwindcss.svg'
import typescript from 'public/static/techicons/typescript.svg'
import vercel from 'public/static/techicons/vercel.svg'
import vite from 'public/static/techicons/vite.svg'
import vuedotjs from 'public/static/techicons/vuedotjs.svg'
import vuetify from 'public/static/techicons/vuetify.svg'
import wagmi from 'public/static/techicons/wagmi.svg'
import web3dotjs from 'public/static/techicons/web3dotjs.svg'
import wechat from 'public/static/techicons/wechat.svg'
import yaml from 'public/static/techicons/yaml.svg'
import yarn from 'public/static/techicons/yarn.svg'
import zoom from 'public/static/techicons/zoom.svg'
import redis from 'public/static/techicons/redis.svg'
import mssql from 'public/static/techicons/mssql.svg'
import servicebus from 'public/static/techicons/servicebus.svg'
import azure from 'public/static/techicons/azure.svg'
import azurepipline from 'public/static/techicons/azurepipline.svg'

export enum TechType {
  Frontend = 'frontend',
  Backend = 'backend',
  Language = 'language',
  DevOps = 'devops',
  Blockchain = 'blockchain',
  Database = 'database',
  Other = 'other',
}
export interface IconDefinition {
  value: any
  label: string
  type: TechType
}

export const icons: Record<string, IconDefinition> = {
  Antd: { value: Antd, label: 'Antd', type: TechType.Frontend },
  Antv: { value: Antv, label: 'Antv', type: TechType.Frontend },
  Axios: { value: Axios, label: 'Axios', type: TechType.Frontend },
  Azure: { value: azure, label: 'Azure', type: TechType.DevOps },
  AzurePipline: { value: azurepipline, label: 'Azure Pipline', type: TechType.DevOps },
  Blazor: { value: Blazor, label: 'Blazor', type: TechType.Frontend },
  BootStrap: { value: BootStrap, label: 'BootStrap', type: TechType.Frontend },
  ChainLink: { value: ChainLink, label: 'ChainLink', type: TechType.Other },
  Chatjs: { value: Chatjs, label: 'Chart.js', type: TechType.Frontend },
  ChatBot: { value: ChatBot, label: 'ChatBot', type: TechType.Other },
  Confluence: { value: Confluence, label: 'Confluence', type: TechType.Other },
  Csharp: { value: Csharp, label: 'C#', type: TechType.Language },
  css3: { value: css3, label: 'CSS', type: TechType.Frontend },
  docker: { value: docker, label: 'Docker', type: TechType.DevOps },
  dotnet: { value: dotnet, label: '.Net', type: TechType.Backend },
  eslint: { value: eslint, label: 'Eslint', type: TechType.Frontend },
  ethereum: { value: ethereum, label: 'Ethereum', type: TechType.Blockchain },
  ethers: { value: ethers, label: 'Ethers.js', type: TechType.Blockchain },
  gin: { value: gin, label: 'Gin', type: TechType.Backend },
  git: { value: git, label: 'Git', type: TechType.Other },
  githubactions: { value: githubactions, label: 'Github Actions', type: TechType.DevOps },
  githubcopilot: { value: githubcopilot, label: 'Github Copilot', type: TechType.Other },
  go: { value: go, label: 'Go', type: TechType.Language },
  goland: { value: goland, label: 'Goland', type: TechType.Other },
  html5: { value: html5, label: 'HTML5', type: TechType.Frontend },
  ipfs: { value: ipfs, label: 'IPFS', type: TechType.Blockchain },
  javascript: { value: javascript, label: 'JavaScript', type: TechType.Language },
  jellyfin: { value: jellyfin, label: 'Jellyfin', type: TechType.Other },
  jenkins: { value: jenkins, label: 'Jenkins', type: TechType.DevOps },
  jsonwebtokens: { value: jsonwebtokens, label: 'JWT', type: TechType.Other },
  linux: { value: linux, label: 'Linux', type: TechType.Other },
  markdown: { value: markdown, label: 'Markdown', type: TechType.Other },
  mssql: { value: mssql, label: 'SQL Server', type: TechType.Database },
  mysql: { value: mysql, label: 'Mysql', type: TechType.Database },
  nextdotjs: { value: nextdotjs, label: 'Next.js', type: TechType.Frontend },
  nodedotjs: { value: nodedotjs, label: 'Node.js', type: TechType.Backend },
  notion: { value: notion, label: 'Notion', type: TechType.Other },
  nuget: { value: nuget, label: 'Nuget', type: TechType.Other },
  nvm: { value: nvm, label: 'NVM', type: TechType.Other },
  openai: { value: openai, label: 'OpenAI', type: TechType.Other },
  openzeppelin: { value: openzeppelin, label: 'Openzeppelin', type: TechType.Blockchain },
  pnpm: { value: pnpm, label: 'Pnpm', type: TechType.Other },
  postgresql: { value: postgresql, label: 'PostgreSQL', type: TechType.Database },
  postman: { value: postman, label: 'Postman', type: TechType.Other },
  prettier: { value: prettier, label: 'Prettier', type: TechType.Other },
  rabbitmq: { value: rabbitmq, label: 'Rabbitmq', type: TechType.Backend },
  redis: { value: redis, label: 'Redis', type: TechType.Database },
  react: { value: react, label: 'React', type: TechType.Frontend },
  redux: { value: redux, label: 'Redux', type: TechType.Frontend },
  resharper: { value: resharper, label: 'Resharper', type: TechType.Other },
  sass: { value: sass, label: 'sass', type: TechType.Frontend },
  servicebus: { value: servicebus, label: 'Service Bus', type: TechType.Backend },
  solidity: { value: solidity, label: 'Solidity', type: TechType.Blockchain },
  sqlite: { value: sqlite, label: 'Sqlite', type: TechType.Database },
  swagger: { value: swagger, label: 'Swagger', type: TechType.Other },
  tailwindcss: { value: tailwindcss, label: 'Tailwind CSS', type: TechType.Frontend },
  typescript: { value: typescript, label: 'TypeScript', type: TechType.Language },
  vercel: { value: vercel, label: 'Vercel', type: TechType.DevOps },
  vite: { value: vite, label: 'Vite', type: TechType.Frontend },
  vuedotjs: { value: vuedotjs, label: 'Vue', type: TechType.Frontend },
  vuetify: { value: vuetify, label: 'Vuetify', type: TechType.Frontend },
  wagmi: { value: wagmi, label: 'Wagmi', type: TechType.Blockchain },
  web3dotjs: { value: web3dotjs, label: 'Web3.js', type: TechType.Blockchain },
  wechat: { value: wechat, label: 'Wechat MP', type: TechType.Frontend },
  yaml: { value: yaml, label: 'Yaml', type: TechType.Other },
  yarn: { value: yarn, label: 'Yarn', type: TechType.Other },
  zoom: { value: zoom, label: 'Zoom', type: TechType.Other },
}
