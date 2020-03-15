export const calibur = (scene, nikke) => {
  nikke.setTapEvent(async chara => {
    await scene.talk([
      { chara: 'ann', text: 'よし、竜族の言葉の煙を出すよ。' }
    ])
    await scene.talk([
      { chara, text: 'やあ、' },
      { chara, text: '僕を呼んだのはキミだね？' },
      { chara: 'ann', text: 'えっと、ニッケさん？' },
      { chara, text: 'うん。' },
      { chara, text: 'キミは？' },
      { chara: 'ann', text: '私はアン。' },
      { chara, text: 'アン、キミはこの剣が欲しいんだね？' },
      { chara: 'ann', text: 'そう！貸してくれないかな？' },
      { chara, text: 'この剣はね、結構凄いんだ。' },
      { chara, text: '僕たち竜族にとっては中々怖いモノだよ。' },
      { chara, text: '人に返すにはちょっと勇気がいるねー。' },
      { chara: 'ann', text: 'うーん、そこをなんとか…。' },
      { chara, text: 'どうしても？' },
      { chara: 'ann', text: 'どうしても。' },
      { chara, text: '何に使うの？' },
      { chara: 'ann', text: 'えーと、' },
      { chara, text: 'これで竜を殺すのかい？' },
      { chara: 'ann', text: 'うーん…、' },
      { chara, text: '教えてね。' },
      { chara: 'ann', text: 'ソンベルクを倒す。' },
      { chara, text: 'ソンベルクを殺すんだね。' },
      { chara, text: '可哀想なソンベルク。' },
      { chara, text: 'やんちゃな奴だけど僕の友達だよ？' },
      { chara: 'ann', text: 'そうなの？' },
      { chara, text: '十年も封印されて、' },
      { chara, text: 'やっと目が覚めたっていうのに、' },
      { chara, text: '殺されちゃうんだね。' },
      { chara: 'ann', text: 'そう言われても…、' },
      { chara, text: '可哀想なソンベルク。' },
      { chara: 'ann', text: '…。' },
      { chara, text: 'まあでも仕方ないね。' },
      { chara, text: 'ここは今は人間の地だ。' },
      { chara, text: '残った竜族は虐げられても文句は言えない。' },
      { chara: 'ann', text: 'ソンベルクは説得したら王や王国を襲うのをやめるかな？' },
      { chara, text: 'やめないと思う。' },
      { chara: 'ann', text: 'そうなんだ…。' },
      { chara, text: '聖剣だったね。' },
      { chara, text: 'よし、' },
      { chara, text: 'うん、返すよ。' },
      { chara, text: '人が作ったものだしね。' },
      { chara, text: '人に返すのがフェアだ。' },
      { chara, text: 'そしてそれをどう使おうとキミたちの自由だ。' },
      { chara: 'ann', text: 'いいの？' },
      { chara, text: 'うん。' },
      { chara, text: 'でも返す相手が人なら誰でもいいとは思ってない。' },
      { chara, text: '見て、' },
      { chara, text: 'これを作った人間は間違いなく強いヤツだ。' },
      { chara, text: 'キミはこれを持つにふさわしいかな？' },
      { chara, text: '試してもいいよね？' },
      { chara: 'ann', text: 'つまり？' },
      { chara, text: '僕と戦うんだよ。' },
      { chara: 'ann', text: 'なるほど。' },
      { chara, text: 'それでいいよね？' },
      { chara, text: '準備はできてる？' }
    ])
    await scene.talk([
      { chara, text: 'うわ、' },
      { chara, text: '凄く強いんだね。' },
      { chara, text: 'まいったよ。降参だ。' },
      { chara, text: 'キミたち、僕が小さいからって油断しないんだもん。' },
      { chara, text: 'さて、剣ね。' },
      { chara, text: '持っていって。' },
      { chara: 'ann', text: 'ありがとう。' }
    ])
    await scene.talk([
      { chara, text: 'うん、よく似合ってるよ。' },
      { chara: 'ann', text: 'そうかな。' },
      { chara, text: 'うん。' },
      { chara, text: 'さて、' },
      { chara, text: '剣を見張る必要もなくなったし、' },
      { chara, text: '僕もどこかに旅に出ようかな。' }
    ])
    await scene.talk([
      { chara, text: 'あ、' },
      { chara, text: 'ところでキミたちさ、' },
      { chara, text: '何かズルしてない？' },
      { chara: 'ann', text: 'え？' },
      { chara, text: 'なんかキミたちが近くに居ると、時間が歪むのを感じるよ…。' },
      { chara: 'ann', text: '…、' },
      { chara, text: 'まあいいか、' },
      { chara, text: 'それもキミたち人間の作った力だろうしね。' }
    ])
  })
}