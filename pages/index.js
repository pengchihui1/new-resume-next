export default function Home ({ posts }) {
  console.log(posts)
  return (
    <div >
      <div className="main-container">
    <div className="update"><label>更新时间</label> 2020年05月24日 </div>
    <div className="items">
      <article className="resume-item person">
  <h1 className="title"> <i className="iconfont resumegeren"></i> 个人信息</h1>
  <div className="content">
    <div className="items">
      <ul>
        <li><span>姓名: </span> 张二狗 / ErGouZhang</li>
        <li><span>性别: </span>男</li>
        <li><span>年龄: </span>25</li>
        <li><span>学历: </span>本科</li>
        <li><span>职位: </span>算法工程师</li>
        <li><span>现居地: </span>北京</li>
        <li><span>邮件: </span>ergouzhang@gmail.com</li>
        <li><span>电话: </span>18866668888</li>
        <li><span>Github: </span>https://github.com/rgz</li>
      </ul>
    </div>
    {/* <div className="items">
      <img src="assets/img/profile.jpg">
    </div> */}
  </div>
</article>
<article className="resume-item">
  <h1 className="title"> <i className="iconfont resumebug"></i> 关于我</h1>
  <div className="content">
    <ul>
  <li>50 年 <code className="language-plaintext highlighter-rouge">Java</code> 开发经验，具有丰富的编写 <code className="language-plaintext highlighter-rouge">BUG</code> 以及排除 <code className="language-plaintext highlighter-rouge">BUG</code> 的能力</li>
  <li>个人技能点覆盖面非常广，从前端到后端，到数据分析数据挖掘，到机器学习深度学习，个人均非常擅长，尤其擅长吹牛</li>
  <li>熟练使用 <code className="language-plaintext highlighter-rouge">js</code>、<code className="language-plaintext highlighter-rouge">java</code>、<code className="language-plaintext highlighter-rouge">php</code>、<code className="language-plaintext highlighter-rouge">python</code>、<code className="language-plaintext highlighter-rouge">Go</code>、<code className="language-plaintext highlighter-rouge">C</code>、<code className="language-plaintext highlighter-rouge">C++</code>等市面上所有编程语言</li>
  <li>对市面上所有框架均达到倒背如流的熟悉程度，设计模式信手拈来</li>
  <li>具有非常牛逼的带队经验，曾经带领 <code className="language-plaintext highlighter-rouge">1K+</code> 人的团队，直到公司破产</li>
  <li>工作之余喜欢抽烟、喝酒、烫头，为此专门研发了点烟机器人，劝酒机器人，烫头机器人。举杯邀明月、对 <code className="language-plaintext highlighter-rouge">饮</code> 成三人。</li>
</ul>

  </div>
</article>

<article className="resume-item">
  <h1 className="title"> <i className="iconfont resumebug"></i> 工作经历</h1>
  <div className="content">
    <h2 id="牛叉哄哄技术科技有限公司">牛叉哄哄技术科技有限公司</h2>

<p>职位：Java 高级开发工程师
工作内容：<code className="language-plaintext highlighter-rouge">java</code>后端研发，主要包括项目初期的分期，数据库的设计，和代码的开发。</p>

<h2 id="画大饼国际技术有限公司">画大饼国际技术有限公司</h2>

<p>职位： Java 中级开发工程师
工作内容呢： <code className="language-plaintext highlighter-rouge">springboot</code>与<code className="language-plaintext highlighter-rouge">springcloud</code>微服务开发，对相关需求进行开发与测试，并提供<code className="language-plaintext highlighter-rouge">API</code>接口 。采用<code className="language-plaintext highlighter-rouge">git</code>代码管理，<code className="language-plaintext highlighter-rouge">jekins</code>发布</p>

  </div>
</article>

<article className="resume-item">
  <h1 className="title"> <i className="iconfont resumebug"></i> 项目经历</h1>
  <div className="content">
    <h2 id="画大饼网上商城购物平台">画大饼网上商城购物平台</h2>

<p>所属公司: 
牛叉哄哄技术科技有限公司</p>

<p>项目描述: 
这是一个牛叉哄哄的去中心化区块链技术大型商城项目，该项目主要功能为通过蓝牙连接月球上的通信网络，从而为月球居民提供去中心化的购物体验。该项目主要有两个创新点，一个是通过蓝牙技术建立<code className="language-plaintext highlighter-rouge">PB</code>级高速通信网络，实现数据的高速流通与流转，正所谓要想富先修路。 另外一个创新点为通过去中心化的思想，搭建整个购物系统。我们的目标是彻底颠覆购物行业，当行业被颠覆的时候，就是我们成功的时候。前路漫漫其修远兮，吾将上下而求索。</p>

<p>个人职责：</p>
<ol>
  <li>参与产品/需求的设计与评审；</li>
  <li>参与系统基础公共服务代码开发；</li>
  <li>配合测试运维上线</li>
</ol>

<h2 id="画大饼网上商城购物平台-1">画大饼网上商城购物平台</h2>

<p>所属公司: 
牛叉哄哄技术科技有限公司</p>

<p>项目描述: 
这是一个牛叉哄哄的去中心化区块链技术大型商城项目，该项目主要功能为通过蓝牙连接月球上的通信网络，从而为月球居民提供去中心化的购物体验。该项目主要有两个创新点，一个是通过蓝牙技术建立<code className="language-plaintext highlighter-rouge">PB</code>级高速通信网络，实现数据的高速流通与流转，正所谓要想富先修路。 另外一个创新点为通过去中心化的思想，搭建整个购物系统。我们的目标是彻底颠覆购物行业，当行业被颠覆的时候，就是我们成功的时候。前路漫漫其修远兮，吾将上下而求索。</p>

<p>个人职责：</p>
<ol>
  <li>参与产品/需求的设计与评审；</li>
  <li>参与系统基础公共服务代码开发；</li>
  <li>配合测试运维上线</li>
</ol>

<h2 id="画大饼网上商城购物平台-2">画大饼网上商城购物平台</h2>

<p>所属公司: 
牛叉哄哄技术科技有限公司</p>

<p>项目描述: 
这是一个牛叉哄哄的去中心化区块链技术大型商城项目，该项目主要功能为通过蓝牙连接月球上的通信网络，从而为月球居民提供去中心化的购物体验。该项目主要有两个创新点，一个是通过蓝牙技术建立<code className="language-plaintext highlighter-rouge">PB</code>级高速通信网络，实现数据的高速流通与流转，正所谓要想富先修路。 另外一个创新点为通过去中心化的思想，搭建整个购物系统。我们的目标是彻底颠覆购物行业，当行业被颠覆的时候，就是我们成功的时候。前路漫漫其修远兮，吾将上下而求索。</p>

<p>个人职责：</p>
<ol>
  <li>参与产品/需求的设计与评审；</li>
  <li>参与系统基础公共服务代码开发；</li>
  <li>配合测试运维上线</li>
</ol>

<h2 id="画大饼网上商城购物平台-3">画大饼网上商城购物平台</h2>

<p>所属公司: 
牛叉哄哄技术科技有限公司</p>

<p>项目描述: 
这是一个牛叉哄哄的去中心化区块链技术大型商城项目，该项目主要功能为通过蓝牙连接月球上的通信网络，从而为月球居民提供去中心化的购物体验。该项目主要有两个创新点，一个是通过蓝牙技术建立<code className="language-plaintext highlighter-rouge">PB</code>级高速通信网络，实现数据的高速流通与流转，正所谓要想富先修路。 另外一个创新点为通过去中心化的思想，搭建整个购物系统。我们的目标是彻底颠覆购物行业，当行业被颠覆的时候，就是我们成功的时候。前路漫漫其修远兮，吾将上下而求索。</p>

<p>个人职责：</p>
<ol>
  <li>参与产品/需求的设计与评审；</li>
  <li>参与系统基础公共服务代码开发；</li>
  <li>配合测试运维上线</li>
</ol>

  </div>
</article>
    </div>
  </div>
    </div>
  )
}

{/* // dynamic route content */}
{/* // export async function getStaticProps({ params }) { */}
 
{/* // } */}
