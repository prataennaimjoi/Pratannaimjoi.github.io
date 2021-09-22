def Camera(to, text):
    pilih = ("#FF0000","#E000CD","#57FF00")
    warna = random.choice(pilih)
    data = {
            "type": "flex",
            "altText": "ARIFISTIFIK",
            "contents": {
             "type": "bubble",
             "styles": {
               "header": {
                 "backgroundColor": "#0000FF",
               },
               "body": {
                 "backgroundColor": "#000000",
                 "separator": True,
                 "separatorColor": "#ffffff"
               },
               "footer": {
                 "backgroundColor": "#000080",
                 "separator": True
               }
             },
             "header": {
               "type": "box",
               "layout": "horizontal",
               "contents": [
                 {
                   "type": "text",
                   "text": "  SIDER MEMBERS",
                   "weight": "bold",
                   "color": warna,
                   "size": "xxl"
                 }
               ]
             },
             "hero": {
               "type": "image",
               "url": "https://obs.line-scdn.net/{}".format(cl.getContact(op.param2).pictureStatus),
               "size": "full",
               "aspectRatio": "20:13",
               "aspectMode": "cover",
               "action": {
                 "type": "uri",
                 "uri": "https://line.me/ti/p/~ptatan1983"
                 }
               },
                   "type": "bubble",
                   "body": {
                       "type": "box",
                       "layout": "horizontal",
                       "contents": [
                           {
                               "type": "text",
                               "text": "Nama: {}".format(cl.getContact(op.param2).displayName),
                               "wrap": True,
                               "color": warna,
                               "align": "center"
                           }
                       ]
                   },
                   "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [{
                        "type": "button",
                        "style": "primary",
                        "color": warna,
                        "height": "sm",
                        "action": {
                            "type": "uri",
                            "label": "ADD ID LINE",
                            "uri": "https://line.me/ti/p/"+cl.getUserTicket().id
                            }													
                        },
                    {
                        "type": "spacer",
                        "size": "sm",
                    }],
                    "flex": 0
                }
            }
        }
    cl.postTemplate(op.param1, data)

def sendTemplates(to, data):
    data = data
    url = "https://api.line.me/message/v3/share"
    headers = {}
    headers['User-Agent'] = 'Mozilla/5.0 (Linux; Android 9; CPH2015 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/93.0.4577.82 Mobile Safari/537.36 Line/11.16.2'  
    headers['Content-Type'] = 'application/json'  
    headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.5uMcEEHahauPb5_MKAArvGzEP8dFOeVQeaMEUSjtlvMV9uuGpj827IGArKqVJhiGJy4vs8lkkseiNd-3lqST14THW-SlwGkIRZOrruV4genyXbiEEqZHfoztZbi5kTp9NFf2cxSxPt8YBUW1udeqKu2uRCApqJKzQFfYu3cveyk.GoRKUnfzfj7P2uAX9vYQf9WzVZi8MFcmJk8uFrLtTqU'
    sendPost = requests.post(url, data=json.dumps(data), headers=headers)
    print(sendPost)
    return sendPost
def sendTextTemplate(to, text):
    data = {
            "type": "flex",
            "altText": "SELFBOT",
            "contents": {
  "styles": {
    "body": {
      "backgroundColor": "#FF0042"
    }
  },
  "type": "bubble",
  "body": {
    "contents": [
      {
        "contents": [
          {
            "contents": [
              {
                "text": text,
                "size": "md",
                "margin": "none",
                "color": "#FFFFFF",
                "wrap": True,
                "weight": "regular",
                "type": "text"
              }
            ],
            "type": "box",
            "layout": "baseline"
          }
        ],
        "type": "box",
        "layout": "vertical"
      }
    ],
    "type": "box",
    "spacing": "md",
    "layout": "vertical"
  }
}
}
    cl.postTemplate(to, data)

def sendTextTemplateMaster(to, text):
    data = {
            "type": "flex",
            "altText": "SELFBOT",
            "contents": {
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "spacing": "md",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "flex": 2,
        "contents": [
          {
            "type": "text",
            "text": text,
            "size": "sm",
            "weight": "bold",
            "wrap": True,
            "color": "#40ff00"
          }
        ]
      }
    ]
  },
  "styles": {
    "body": {
      "backgroundColor": "#7D00C1"
    },
    "footer": {
      "backgroundColor": "#03f5f1"
    },
    "header": {
      "backgroundColor": "#03f5f1"
    }
    },  
     "hero": {
     "type": "image",
     "aspectRatio": "20:13",
     "aspectMode": "cover",
     "url": "https://i.pinimg.com/474x/f5/95/3e/f5953e75376e51e38d909779b027d7f5--hack-online-email-address.jpg",
     "size": "full",
     "margin": "xl"
  },
  "footer": {
      "type": "box",
      "layout": "vertical",
      "contents": [{
          "type": "box",
          "layout": "horizontal",
          "contents": [{
              "type": "button",
              "flex": 3,
              "style": "primary",
              "color": "#ff0a3b",
              "height": "sm",
              "action": {
                  "type": "uri",
                  "label": "DPK",
                  "uri": "http://line.me/ti/p/~@642xtzwc"
              }
          }, {
              "flex": 3,
              "type": "button",
              "style": "primary",
              "color": "#310dff",
              "margin": "sm",
              "height": "sm",
              "action": {
                  "type": "uri",
                  "label": "CREATOR",
                  "uri": "http://line.me/ti/p/~@642xtzwc"
              }
          }]
      }]
  }
}
}
    cl.postTemplate(to, data)

def sendStickerTemplate(to, text):
    url = "https://game.linefriends.com/jbp-lcs-ranking/lcs/sendMessage"
    to = op.param1
    data = {
                          "type": "template",
                          "altText": "{} sent a sticker".format(cl.getProfile().displayName),
                          "template": {
                             "type": "image_carousel",
                             "columns": [
                              {
                                  "imageUrl": text,
                                  "size": "full", 
                                  "action": {
                                      "type": "uri",
                                      "uri": "http://line.me/ti/p/~@cob0606n"
           }                                                
 }
]
                          }
                      }
    cl.postTemplate(to, data)
def clBot(op):
    try:
        if op.type == 0:
            print ("[ 0 ] END OF OPERATION")
            return
        if op.type == 5:
            print ("[ 5 ] NOTIFIED ADD CONTACT")
            if settings["autoAdd"] == True:
                cl.sendMessage(op.param1, "Halo {} terimakasih telah menambahkan saya sebagai teman :D".format(str(cl.getContact(op.param1).displayName)))
        if op.type == 13:
            print ("[ 13 ] NOTIFIED INVITE GROUP")
            group = cl.getGroup(op.param1)
            if settings["autoJoin"] == True:
                cl.acceptGroupInvitation(op.param1)
        if op.type == 24:
            print ("[ 24 ] NOTIFIED LEAVE ROOM")
            if settings["autoLeave"] == True:
                cl.leaveRoom(op.param1)
        if op.type == 25:
            print ("[ 25 ] SEND MESSAGE")
            msg = op.message
            text = msg.text
            msg_id = msg.id
            receiver = msg.to
            sender = msg._from
            if msg.toType == 0:
                if sender != cl.profile.mid:
                    to = sender
                else:
                    to = receiver
            else:
                to = receiver
            if msg.contentType == 0:
                if text is None:
                    return
                if text.lower() == 'help':
                       if msg.toType == 2:
                           data = {
  "contents": [
    {
      "styles": {
        "body": {
          "backgroundColor": "#7D00C1"
        },
        "footer": {
          "backgroundColor": "#7D00C1"
        },
        "header": {
          "backgroundColor": "#7D00C1"
        }
      },
      "type": "bubble",
      "body": {
        "contents": [
          {
            "contents": [
              {
                "contents": [
                  {
                    "type": "text",
                    "text": "꧁TANBOTNEVERDIES꧂",
                    "size": "xl",
                    "wrap": True,
                    "weight": "bold",
                    "color": "#00FF00",
                    "align": "center"
                  }
                ],
                "type": "box",
                "layout": "baseline"
              }
            ],
            "type": "box",
            "spacing": "xs",
            "layout": "vertical"
          },
          {
            "type": "image",
        "url": "https://i.pinimg.com/474x/f5/95/3e/f5953e75376e51e38d909779b027d7f5--hack-online-email-address.jpg", #hp
        "aspectRatio": "2:1",
        "aspectMode": "cover",
        "size": "full",
          },
          {
            "type": "separator",
            "color": "#FF0000"
          },
          {
            "contents": [
              {
                "contents": [
                  {
                    "text": "MENU HELP",
                    "color": "#00FFFF",
                    "wrap": True,
                    "weight": "bold",
                    "type": "text",
                    "size": "lg",
                    "align": "center"
                  }
                ],
                "type": "box",
                "layout": "baseline"
              }
            ],
            "type": "box",
            "spacing": "xs",
            "layout": "vertical"
          },
          {
            "type": "separator",
            "color": "#FF0000"
          },
          {
            "contents": [
              {
                "contents": [
                  {
                    "text": "║│ RESTART\n║│RUNTIME\n║│ STATUS\n║│ ABOUT\n║│ DELL(RCHAT)\n║│ MIMICDEL (@)\n║│ MIMICLIST\n║│ LURKING ON|OFF|RESET\n║│ LURKING",
                    "size": "xs",
                    "margin": "none",
                    "color": "#FFFF00",
                    "wrap": True,
                    "weight": "regular",
                    "type": "text"
                  }
                ],
                "type": "box",
                "layout": "baseline"
              }
            ],
            "type": "box",
            "spacing": "xs",
            "layout": "vertical"
          }
        ],
        "type": "box",
        "spacing": "xs",
        "layout": "vertical"
      }, #batas
      "type": "bubble",
      "footer": {
        "type": "box",   
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
        "text": "꧁TANBOTNEVERDIES꧂",
        "size": "xl",
        "wrap": True,
        "weight": "bold",
        "color": "#FFFF00",
        "action": {
          "type": "uri",
          "uri": "http://line.me/ti/p/~@642xtzwc",
        },
        "align": "center"
      },
      {
        "type": "separator",
        "color": "#FF0000"
      },  
      {
        "type": "text",
        "text": "VERSION",
        "size": "xl",
        "wrap": True,
        "weight": "bold",
        "color": "#FFFF00",
        "action": {
          "type": "uri",
          "uri": "http://line.me/ti/p/~@642xtzwc"
        },
        "align": "center"
      },
        ]
      }
    },
    {
      "styles": {
        "body": {
          "backgroundColor": "#7D00C1"
        },
        "footer": {
          "backgroundColor": "#7D00C1"
        },
        "header": {
          "backgroundColor": "#7D00C1"
        }
      },
      "type": "bubble",
      "body": {
        "contents": [
          {
            "contents": [
              {
                "contents": [
                  {
                    "type": "text",
                    "text": "꧁TANBOTNEVERDIES꧂",
                    "size": "xl",
                    "wrap": True,
                    "weight": "bold",
                    "color": "#00FF00",
                    "align": "center"
                  }
                ],
                "type": "box",
                "layout": "baseline"
              }
            ],
            "type": "box",
            "spacing": "xs",
            "layout": "vertical"
          },
          {
            "type": "image",
        "url": "https://i.pinimg.com/474x/f5/95/3e/f5953e75376e51e38d909779b027d7f5--hack-online-email-address.jpg", #hp
        "aspectRatio": "2:1",
        "aspectMode": "cover",
        "size": "full",
          },
          {
            "type": "separator",
            "color": "#FF0000"
          },
          {
            "contents": [
              {
                "contents": [
                  {
                    "text": "MENU SETTINGS",
                    "color": "#00FFFF",
                    "wrap": True,
                    "weight": "bold",
                    "type": "text",
                    "size": "lg",
                    "align": "center"
                  }
                ],
                "type": "box",
                "layout": "baseline"
              }
            ],
            "type": "box",
            "spacing": "xs",
            "layout": "vertical"
          },
          {
            "type": "separator",
            "color": "#FF0000"
          },
          {
            "contents": [
              {
                "contents": [
                  {
                    "text": "║│ ALLSTATUS「On/Off」\n║│ RESTART\n║│ NOTIF「On/Off」\n║│ SIDER「On/Off」\n║│ AUTOADD「On/Off」\n║│ AUTOJOIN「On/Off」\n║│ AUTOLEAVE「On/Off」\n║│ AUTOREAD「On/Off」\n║│ CHECKSTICKER「On/Off」\n║│ DETECTMENTION「On/Off」",
                    "size": "xs",
                    "margin": "none",
                    "color": "#FFFF00",
                    "wrap": True,
                    "weight": "regular",
                    "type": "text"
                  }
                ],
                "type": "box",
                "layout": "baseline"
              }
            ],
            "type": "box",
            "spacing": "xs",
            "layout": "vertical"
          }
        ],
        "type": "box",
        "spacing": "xs",
        "layout": "vertical"
      }, #batas
      "type": "bubble",
      "footer": {
        "type": "box",   
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
        "text": "DPKBOT",
        "size": "xl",
        "wrap": True,
        "weight": "bold",
        "color": "#FFFF00",
        "action": {
          "type": "uri",
          "uri": "http://line.me/ti/p/~@642xtzwc",
        },
        "align": "center"
      },
      {
        "type": "separator",
        "color": "#FF0000"
      },  
      {
        "type": "text",
        "text": "VERSION",
        "size": "xl",
        "wrap": True,
        "weight": "bold",
        "color": "#FFFF00",
        "action": {
          "type": "uri",
          "uri": "http://line.me/ti/p/~@642xtzwc"
        },
        "align": "center"
      },
        ]
      }
    },
    {
      "styles": {
        "body": {
          "backgroundColor": "#7D00C1"
        },
        "footer": {
          "backgroundColor": "#7D00C1"
        },
        "header": {
          "backgroundColor": "#7D00C1"
        }
      },
      "type": "bubble",
      "body": {
        "contents": [
          {
            "contents": [
              {
                "contents": [
                  {
                    "type": "text",
                    "text": "꧁TANBOTNEVERDIES꧂",
                    "size": "xl",
                    "wrap": True,
                    "weight": "bold",
                    "color": "#00FF00",
                    "align": "center"
                  }
                ],
                "type": "box",
                "layout": "baseline"
              }
            ],
            "type": "box",
            "spacing": "xs",
            "layout": "vertical"
          },
          {
            "type": "image",
        "url": "https://i.pinimg.com/474x/f5/95/3e/f5953e75376e51e38d909779b027d7f5--hack-online-email-address.jpg", #hp
        "aspectRatio": "2:1",
        "aspectMode": "cover",
        "size": "full",
          },
          {
            "type": "separator",
            "color": "#FF0000"
         cl.postFlex(to, data)

                elif msg.text.lower().startswith("scall "):
                                if msg.toType == 2:
                                    sep = text.split(" ")
                                    strnum = text.replace(sep[0] + " ","")
                                    num = int(strnum)
                                    cl.sendMessage(to, "Succesfully Spam Call to Group")
                                    for var in range(0,num):
                                       group = cl.getGroup(to)
                                       members = [mem.mid for mem in group.members]
                                       cl.acquireGroupCallRoute(to)
                                       cl.inviteIntoGroupCall(to, contactIds=members)

                elif msg.text.lower().startswith("smule "):
                            proses = text.split(" ")
                            urutan = text.replace(proses[0] + " ","")
                            count = urutan.split("-")
                            search = str(count[0])
                            r = requests.get("https://www.smule.com/"+search+"/performances/json")
                            data = json.loads(r.text)
                            if len(count) == 1:
                                no = 0
                                ret_ = "DAFTAR OC\n"
                                for aa in data["list"]:
                                    no += 1
                                    ret_ += "\n" + str(no) + ". " + str(aa["title"])
                                ret_ += "\n\nSelanjutnya ketik: smule {}-nomor\nuntuk melihat detailnya. ".format(str(search))
                                sendTextTemplate(msg.to,ret_)
                            elif len(count) == 2:
                                try:
                                    num = int(count[1])
                                    b = data["list"][num - 1]
                                    smule = str(b["web_url"])
                                    c = "Judul Oc: "+str(b["title"])
                                    c += "\nPembuat: "+str(b["owner"]["handle"])
                                    c += "\nTotal like: "+str(b["stats"]["total_loves"])+" like"
                                    c += "\nTotal comment: "+str(b["stats"]["total_comments"])+" comment"
                                    c += "\nStatus VIP: "+str(b["owner"]["is_vip"])
                                    c += "\nStatus Oc: "+str(b["message"])
                                    c += "\nCreated Oc: {}".format(b["created_at"][:10])
                                    c += "\nDidengarkan: {}".format(b["stats"]["total_listens"])+" orang"
                                    hasil = "Detail Record\n\n"+str(c)
                                    dl = str(b["cover_url"])
                                    cl.sendImageWithURL(msg.to,dl)
                                    cl.sendMessage(msg.to, hasil, {'AGENT_NAME': ' URL Smule','AGENT_LINK': 'https://www.smule.com/{}'.format(str(b['owner']['handle'])),'AGENT_ICON': 'https://png.icons8.com/color/50/000000/speaker.png' })
                                    with requests.session() as s:
                                        s.headers['user-agent'] = 'Mozilla/5.0'
                                        r = s.get("https://sing.salon/smule-downloader/?url=https://www.smule.com{}".format(urllib.parse.quote(smule)))
                                        data = BeautifulSoup(r.content, 'html5lib')
                                        get = data.select("a[href*=https://www.smule.com/redir?]")[0]
                                        title = data.findAll('h2')[0].text
                                        imag = data.select("img[src*=https://www.smule.com/redir?]")[0]
                                        if 'Smule.m4a' in get['download']:
                                            sendTextTemplate(msg.to,"Type: Audio\n\nPlease wait for audio...")
                                            cl.sendAudioWithURL(msg.to, get['href'])
                                        else:
                                            sendTextTemplate(msg.to,"Type: Video\n\nPlease wait for video...")
                                            cl.sendVideoWithURL(msg.to, get['href'])
                                except Exception as e:
                                    cl.sendMessage(msg.to,"DONE")
                elif "hbd" in msg.text.lower():
                        	if settings["responsticker"] == True:
                                    url = "https://game.linefriends.com/jbp-lcs-ranking/lcs/sendMessage"
                                    to = msg.to
                                    data = {
                                                "type": "template",
                                                "altText": "{} sent a sticker".format(cl.getProfile().displayName),
                                                "template": {
                                                   "type": "image_carousel",
                                                   "columns": [
                                                    {
                                                        "imageUrl": "https://3.bp.blogspot.com/-Tjdw2KiP9Bg/Wfnb6krqnbI/AAAAAAAMKF4/LOZXghvCTkcaTmfSe0Fwe8CnTdOdCPj-ACLcBGAs/s1600/AW601285_21.gif",
                                                        "size": "full", 
                                                        "action": {
                                                            "type": "uri",
                                                            "uri": "http://line.me/ti/p/~@642xtzwc"
                                 }                                                
                       }
                      ]
                                                }
                                            }
                                    cl.postTemplate(to, data)
