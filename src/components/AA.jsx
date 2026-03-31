import "./AA.css";
import ladder from "./ladder.png" 
import snake from "./snake.png" 

export default function AA() {
  return (
    <>
      <h2>Snake Ludo</h2>
      <div className="board">
        <div className="box">100</div>
        <div className="box">99</div>
        <div className="box">98</div>
        <div className="box">97</div>
        <div className="box">96</div>
        <div className="box">95</div>
        <div className="box">94</div>
        <div className="box">93</div>
        <div className="box">92</div>
        <div className="box">91</div>

        <div className="box">90</div>
        <div className="box">89</div>
        <div className="box">88</div>
        <div className="box">87</div>
        <div className="box">86</div>
        <div className="box">85</div>
        <div className="box">84</div>
        <div className="box">83</div>
        <div className="box">82</div>
        <div className="box">81</div>

        <div className="box">80</div>
        <div className="box">79</div>
        <div className="box">78</div>
        <div className="box">77</div>
        <div className="box">76</div>
        <div className="box">75</div>
        <div className="box">74</div>
        <div className="box">73</div>
        <div className="box">72</div>
        <div className="box">71</div>

        <div className="box">70</div>
        <div className="box">69</div>
        <div className="box">68</div>
        <div className="box">67</div>
        <div className="box">66</div>
        <div className="box">65</div>
        <div className="box">64</div>
        <div className="box">63</div>
        <div className="box">62</div>
        <div className="box">61</div>

        <div className="box">60</div>
        <div className="box">59</div>
        <div className="box">58</div>
        <div className="box">57</div>
        <div className="box">56</div>
        <div className="box">55</div>
        <div className="box">54</div>
        <div className="box">53</div>
        <div className="box">52</div>
        <div className="box">51</div>

        <div className="box">50</div>
        <div className="box">49</div>
        <div className="box">48</div>
        <div className="box">47</div>
        <div className="box">46</div>
        <div className="box">45</div>
        <div className="box">44</div>
        <div className="box">43</div>
        <div className="box">42</div>
        <div className="box">41</div>

        <div className="box">40</div>
        <div className="box">39</div>
        <div className="box">38</div>
        <div className="box">37</div>
        <div className="box">36</div>
        <div className="box">35</div>
        <div className="box">34</div>
        <div className="box">33</div>
        <div className="box">32</div>
        <div className="box">31</div>

        <div className="box">30</div>
        <div className="box">29</div>
        <div className="box">28</div>
        <div className="box">27</div>
        <div className="box">26</div>
        <div className="box">25</div>
        <div className="box">24</div>
        <div className="box">23</div>
        <div className="box">22</div>
        <div className="box">21</div>

        <div className="box">20</div>
        <div className="box">19</div>
        <div className="box">18</div>
        <div className="box">17</div>
        <div className="box">16</div>
        <div className="box">15</div>
        <div className="box">14</div>
        <div className="box">13</div>
        <div className="box">12</div>
        <div className="box">11</div>

        <div className="box">10</div>
        <div className="box">9</div>
        <div className="box">8</div>
        <div className="box">7</div>
        <div className="box">6</div>
        <div className="box">5</div>
        <div className="box">4</div>
        <div className="box">3</div>
        <div className="box">2</div>
        <div className="box">1</div>
      </div>

      <img src={snake} alt="snake photo" />
      <img src={snake} className="snake" alt="snake photo" />
      <img src={ladder} className="stairs" alt="ladder" />
      <img src={ladder} className="ladder" alt="ladder" />
      
    </>
  );
}